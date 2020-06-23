import React, { useState, forwardRef } from 'react';
import './language.sass'
import { useTranslation } from 'react-i18next';
import { Image, Dropdown } from 'react-bootstrap';
import esIcon from '../../../assets/icons/languages/es.svg';
import deIcon from '../../../assets/icons/languages/de.svg';
import enIcon from '../../../assets/icons/languages/en.svg';

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <button
        ref={ref}
        className="language-dropdown"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </button>
));

const CustomMenu = forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const LanguageComponent = () => {

    // eslint-disable-nex-line
    const [t, i18n] = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (<div>
        <Dropdown drop="left">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <Image src={require(`../../../assets/icons/languages/${i18n.language}.svg`)} className="language-icon" bsPrefix
                />
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item as="button" onClick={() => changeLanguage('es')}><Image src={esIcon} className="language-icon" bsPrefix /> Español</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('de')}><Image src={deIcon} className="language-icon"
                    bsPrefix /> Deutsch</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('en')}><Image src={enIcon} className="language-icon" bsPrefix /> English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>)
}

export default LanguageComponent;