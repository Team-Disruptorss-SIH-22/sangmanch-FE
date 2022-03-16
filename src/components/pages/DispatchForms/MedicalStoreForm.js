import { useState } from "react";
import Compressor from "compressorjs";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "../../../styles/userforms.module.css";
import UserNavbar from "./UserNavbar";

const MedicalStoreForm = () => {
	const [userRegisteration, setUserRegisteration] = useState({
		uidai: "",
		drlicense: "",
		lotnumber: "",
		quantity: "",
		prescription: null
	});

	const [records, setRecords] = useState([]);

	const [Registering, setRegistering] = useState(false);

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);

		setUserRegisteration({ ...userRegisteration, [name]: value });
		console.log(`${[name]}`, value);
	};

	const handleCompressedUpload = (e) => {
		const image = e.target.files[0];
		new Compressor(image, {
			quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
			success: (compressedResult) => {
				// compressedResult has the compressed file.
				// Use the compressed file to upload the images to your server.

				//  setCompressedFile(Response)
				setUserRegisteration({
					...userRegisteration,
					prescription: compressedResult
				});
			}
		});
	};

	const onSubmitRecaptcha = (e) => {
		console.log("RECAPTCHA VALUE", e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let error = false;
		setRegistering(true);

		const newRecord = {
			...userRegisteration,
			id: new Date().getTime().toString()
		};
		setRecords([...records, newRecord]);
		console.log(newRecord);

		if (error) {
			return setRegistering(false);
		}

		setRegistering(false);
	};

	return (
		<div className={styles.container}>
			<UserNavbar />

			<div className={styles.titleContainer}>
				<p className={styles.title}>Medical Store Sales Form</p>
				<p className={styles.titleSubheader}>
					Fill in the data to report the forwarded data.
				</p>
			</div>

			<div className={styles.userformContainer}>
				<div className={styles.detailsContainer}>
					<div className={styles.detailsHeader}>Details Of Dispatch</div>
					<p className={styles.detailsSubHeader}>
						These contacts are used to inform about orders.
					</p>

					<div className={styles.inputContainer}>
						<div className={styles.inputCol1}>
							<label htmlFor="uidai">
								Sold To (Aadhar No.)<span> *</span>
							</label>
						</div>
						<div className={styles.inputCol2}>
							<input
								type="number"
								autoComplete="off"
								value={userRegisteration.uidai}
								onChange={handleInput}
								name="uidai"
								id="uidai"
								placeholder="Sold To (Aadhar No.)"
								required
							/>
						</div>

						<div className={styles.inputCol1}>
							<label htmlFor="drlicense">
								Prescribed By (IMC ID)<span> *</span>
							</label>
						</div>
						<div className={styles.inputCol2}>
							<input
								type="text"
								autoComplete="off"
								value={userRegisteration.drlicense}
								onChange={handleInput}
								name="drlicense"
								id="drlicense"
								placeholder="Prescribed By (IMC ID)"
								required
							/>
						</div>

						<div className={styles.inputCol1}>
							<label htmlFor="lotnumber">
								Lot ID<span> *</span>
							</label>
						</div>
						<div className={styles.inputCol2}>
							<input
								type="text"
								autoComplete="off"
								value={userRegisteration.lotnumber}
								onChange={handleInput}
								name="lotnumber"
								id="lotnumber"
								placeholder="LOT NUMBER"
								required
							/>
						</div>
					</div>
				</div>

				<div className={styles.lineBreak}></div>

				<div className={styles.detailsContainer}>
					<div className={styles.detailsHeader}>
						Drug Details<span> *</span>
					</div>
					<p className={styles.detailsSubHeader}>Details of the drugs forwarded</p>

					<div className={styles.inputContainer}>
						<div className={styles.inputCol1}>
							<label htmlFor="quantity">
								Quantity Sold<span> *</span>
							</label>
						</div>
						<div className={styles.inputCol2}>
							<input
								type="text"
								autoComplete="off"
								value={userRegisteration.quantity}
								onChange={handleInput}
								name="quantity"
								id="quantity"
								placeholder="QUANTITY SOLD"
								required
							/>
						</div>

						<div className={styles.inputCol1}>
							<label htmlFor="prescription">
								Upload Prescription<span> *</span>
							</label>
						</div>
						<div className={styles.inputCol2}>
							<input
								className={styles.uploadPrescription}
								type="file"
								autoComplete="off"
								// value={userRegisteration.prescription}
								accept="image/*,capture=camera"
								capture="”camera"
								// onChange={handleInput}
								onChange={handleCompressedUpload}
								name="prescription"
								id="prescription"
								required
							/>
						</div>
					</div>
				</div>

				<div className={styles.recaptcha}>
					<ReCAPTCHA
						// for testing purpose only this key will work. For production, we need to give domain name while registering.
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={onSubmitRecaptcha}
					/>
				</div>

				<button
					type="submit"
					onClick={handleSubmit}
					className={styles.submit}
					disabled={Registering}
				>
					{Registering ? "Submitting.." : "Submit"}
				</button>
			</div>
		</div>
	);
};

export default MedicalStoreForm;
