import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

export default function NavBar(props) {

    const handleOnChange = (event) => {
        if (event.target.value === 'option1') {
            props.ChangeDarkModeColor('#343a40');
            props.ChangeNavColor('#212529');

           if(props.mode==='dark')
           document.body.style.backgroundColor = "#343a40";
        }
        else if (event.target.value === 'option2') {
            props.ChangeDarkModeColor('#372076'); 
            props.ChangeNavColor('#190a42');

           if(props.mode==='dark')
           document.body.style.backgroundColor = "#372076"
        }
        else if (event.target.value === 'option3')
           { props.ChangeDarkModeColor('#6a1a1a');
            props.ChangeNavColor('#3e0c0c');

            if(props.mode==='dark')
           document.body.style.backgroundColor = "#6a1a1a";
        }
        else if (event.target.value === 'option4')
           { props.ChangeDarkModeColor('#5e1646');
            props.ChangeNavColor('#400c2e');

            if(props.mode==='dark')
           document.body.style.backgroundColor = "#5e1646";
        }
        else if (event.target.value === 'option5')
           { props.ChangeDarkModeColor('#0d5418');
            props.ChangeNavColor('#032809');

            if(props.mode==='dark')
           document.body.style.backgroundColor = "#0d5418";
        }

    }

    return (
        <nav className={`navbar navbar-expand-lg `} style={{ backgroundColor :( props.mode==='light')? '#f8f9fa': props.navcolor }}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color : (props.mode==='light')? 'black':'white'}} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" style={{color : (props.mode==='light')? 'black':'white'}}  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{color : (props.mode==='light')? 'black':'white'}}>{props.aboutText}</Link>
                        </li>


                    </ul>

                    <form className="d-flex" >
                        {/* <input className="form-control " type="search" placeholder="Search" aria-label="Search" size={10} />
                        <button className="btn btn-outline-success " type="submit">Search</button> */}
                    </form>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={handleOnChange} id="inlineRadio1" value="option1" defaultChecked style={{ backgroundColor: '#343a40' }} />
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={handleOnChange} id="inlineRadio2" value="option2" style={{ backgroundColor: '#372076' }}/>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={handleOnChange} id="inlineRadio3" value="option3" style={{ backgroundColor: '#6a1a1a' }}/>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={handleOnChange} id="inlineRadio4" value="option4" style={{ backgroundColor: '#5e1646' }}/>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={handleOnChange} id="inlineRadio5" value="option5" style={{ backgroundColor: '#0d5418' }}/>
                    </div>
                    <div className={`form-check form-switch   text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
                    </div>
                </div>

            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
}

NavBar.defaultProps = {
    title: "Titile ",
    aboutText: "About"
}

