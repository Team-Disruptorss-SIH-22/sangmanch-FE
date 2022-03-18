import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../../../styles/forms/signup.module.css";
import authContext from "context/auth/authContext";

const UserSignup = (props) => {
	const { titleRole } = props;
	const [passwordShown, setPasswordShown] = useState(false);
	const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
	const [registering, setRegistering] = useState(false);
	const setRole = () => {
		const upd_role = titleRole
			.toLowerCase()
			.match(/[A-Z0-9]+/gi)
			.map(function (word, i) {
				if (!i) return word;
				return word[0].toUpperCase() + word.slice(1); //
			})
			.join("");
		return upd_role;
	};

	const [user, setUser] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		uniqueID: "",
		role: setRole()
	});

	const { email, password, confirmPassword, uniqueID } = user;
	const { isAuthenticated, signup, user: loggedUser } = useContext(authContext);

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push(`/${loggedUser.role}/dispatch`);
		}
	}, [isAuthenticated]);

	const togglePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	const toggleConfirmPassword = (e) => {
		e.preventDefault();
		setConfirmPasswordShown(!confirmPasswordShown);
	};

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let error = false;
		setRegistering(true);
		if (password !== confirmPassword) {
			toast.error("Both Passwords don't match!");
			error = true;
		}

		if (error) {
			setRegistering(false);
			return;
		}
		signup(user);
		toast.success("Please verify your email to continue");
		props.history.push("/login");
	};

	return (
		<div className={styles.container}>
			<div className={styles.loginPageContainer}>
				<div className={styles.headersContainer}>
					<div className={styles.logoIcon2}>
						<img src="https://narcoticsindia.nic.in/images/acs.png" alt="logo-icon" />
					</div>

					<div className={styles.headers2}>
						<p className={styles.title2}>NCB DAAS</p>
						<p className={styles.titleDetails2}>Drugs Analytics and Alerting System</p>
					</div>
				</div>

				<p className={styles.loginTitle}>{titleRole} Sign Up</p>

				<form className={styles.formContainer}>
					<div className={styles.inputContainer}>
						<label htmlFor="id">{titleRole} ID</label>
						<input
							type="text"
							id="id"
							name="uniqueID"
							value={uniqueID}
							onChange={onChange}
							placeholder="Your Unique ID"
							required={true}
						/>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="email">EMAIL</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={onChange}
							placeholder="Email Address"
							required={true}
						/>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="password">PASSWORD</label>
						<div className={styles.inputPassword}>
							<input
								type={passwordShown ? "text" : "password"}
								id="password"
								name="password"
								value={password}
								onChange={onChange}
								placeholder="Password"
								required={true}
								autoComplete="off"
							/>
							<button className={styles.showPassword} onClick={togglePassword}>
								{passwordShown ? (
									<img
										src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
										alt="show-password"
									/>
								) : (
									<img
										src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
										alt="hide-password"
									/>
								)}
							</button>
						</div>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor="confirm-password">VERIFY PASSWORD</label>
						<div className={styles.inputPassword}>
							<input
								type={confirmPasswordShown ? "text" : "password"}
								id="confirm-password"
								name="confirmPassword"
								value={confirmPassword}
								onChange={onChange}
								placeholder="Verify Password"
								required={true}
								autoComplete="off"
							/>
							<button className={styles.showPassword} onClick={toggleConfirmPassword}>
								{confirmPasswordShown ? (
									<img
										src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
										alt="show-confirm-password"
									/>
								) : (
									<img
										src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
										alt="hide-confirm-password"
									/>
								)}
							</button>
						</div>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className={styles.submit}
						// disabled={registering}
					>
						{registering ? "Registering.." : "Sign Up"}
					</button>
				</form>

				<div className={styles.footer}>
					<p>
						Already have an Account? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserSignup;