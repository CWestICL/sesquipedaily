import React from "react";
import { Link } from "react-router-dom";

const home = () => (
    <div className="container">
        <div className="mt-5 p-5 bg-light">
            <h1 className="display-4">Ses · quip · e · Daily</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ex id metus tincidunt posuere quis sagittis sem. Vivamus non ante ut urna malesuada cursus eu ut est. Etiam non velit at mi imperdiet rutrum. Proin viverra ut tortor eget fringilla. Aliquam eu orci non odio commodo tincidunt et at nisi. Praesent tristique leo et lacus lobortis, ac luctus leo pretium. Donec id ex finibus risus aliquet sollicitudin non vitae felis. Sed lobortis est leo, ut volutpat nisl dignissim vitae.</p>
            <hr className="my-4" />
            <p>Click the button to log in.</p>
            <Link className="btn btn-primary btn-lg" to="/login">Login</Link>
        </div>
    </div>
);

export default home;