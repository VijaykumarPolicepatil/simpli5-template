import React from "react";

const Footer = () => {
	var d = new Date();
	return (
		<div className="footer out-footer">
			<div className="copyright">
				<p>Copyright © 
					
					{" "}Developed by{" "}
					<a href="http://www.softdienst.com/ " target="_blank"  rel="noreferrer">
						Softdienst Tech private limited
					</a>{" "}
					{d.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
