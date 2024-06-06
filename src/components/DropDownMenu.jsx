import React from 'react';
import Select from 'react-select';
import  FaFlagUsa  from './assets/US_flag_51_stars.svg.png';
import  FaFlagBrazil  from './assets/Flag_of_Portugal.svg';
import  FaFlagRussia  from './assets/Flag_of_Russia.svg.webp';
import  FaFlagIndonesia  from './assets/Flag_of_Indonesia.svg.png';
import FaFlagVietnma  from './assets/Flag_of_Vietnam.svg.png';
import SpanishFlag  from './assets/spain-flag-free-png.webp';

const options = [
    { value: 'en', label: <><img src={FaFlagUsa} alt="USA" style={{ width: '20px', marginRight: '8px' }} /> EN</> },
    { value: 'ru', label: <><img src={FaFlagRussia} alt="Russia" style={{ width: '20px', marginRight: '8px' }} /> RU</> },
    { value: 'vi', label: <><img src={FaFlagVietnma} alt="Vietnam" style={{ width: '20px', marginRight: '8px' }} /> VN</> },
    { value: 'in', label: <><img src={FaFlagIndonesia} alt="Indonesia" style={{ width: '20px', marginRight: '8px' }} /> RI</> },
    { value: 'pr', label: <><img src={FaFlagBrazil} alt="Portugal" style={{ width: '20px', marginRight: '8px' }} /> PT</> },
    { value: 'pr', label: <><img src={SpanishFlag} alt="Portugal" style={{ width: '20px', marginRight: '8px' }} /> SP</> },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        display: 'flex',
         backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        color: 'white',
    }),
    option: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
      
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'white',
      
        
    }),
};

const LanguageSelector = ({ changeLanguage }) => {
    const handleChange = (selectedOption) => {
        changeLanguage(selectedOption.value);
    };

    return (
        <Select
        options={options}
        styles={customStyles}
        onChange={handleChange}
        placeholder="Select Language"
        defaultValue={options.find(option => option.value === 'ru')}
        isSearchable={false}
    />
    );
};

export default LanguageSelector;
