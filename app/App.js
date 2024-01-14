'use client'
import React, { useState, useEffect } from 'react';
import DownloadPDFButton from './DownloadPDFButton';
import './App.css';
import { useRouter } from 'next/navigation';

const ApiData = () => {
    const router = useRouter();

    const [data, setData] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('evaluation');
    const [checkboxDropdowns, setCheckboxDropdowns] = useState({})
    const [checkboxDropdowns1, setCheckboxDropdowns1] = useState({})
    const [checkboxDropdowns2, setCheckboxDropdowns2] = useState({})
    const [checkboxDropdowns3, setCheckboxDropdowns3] = useState({})
    const [checkboxDropdowns4, setCheckboxDropdowns4] = useState({})
    const [checkboxDropdowns5, setCheckboxDropdowns5] = useState({})
    const [checkboxDropdowns6, setCheckboxDropdowns6] = useState({})
    const [checkboxDropdowns7, setCheckboxDropdowns7] = useState({})
    const [checkboxDropdowns8, setCheckboxDropdowns8] = useState({})
    const [checkboxDropdowns9, setCheckboxDropdowns9] = useState({})
    const [checkboxDropdowns10, setCheckboxDropdowns10] = useState({})
    const [checkboxDropdowns11, setCheckboxDropdowns11] = useState({})
    const [totalPrice, setTotalPrice] = useState('$0');
    const [totalPrice1, setTotalPrice1] = useState('$0');
    const [totalPrice2, setTotalPrice2] = useState('$0');
    const [totalPrice3, setTotalPrice3] = useState('$0');
    const [totalPrice4, setTotalPrice4] = useState('$0');
    const [totalPrice5, setTotalPrice5] = useState('$0');
    const [totalPrice6, setTotalPrice6] = useState('$0');
    const [totalPrice7, setTotalPrice7] = useState('$0');
    const [totalPrice8, setTotalPrice8] = useState('$0');
    const [totalPrice9, setTotalPrice9] = useState('$0');
    const [totalPrice10, setTotalPrice10] = useState('$0');
    const [totalPrice11, setTotalPrice11] = useState('$0');
    const [selectedItems, setSelectedItems] = useState(0);
    const [selectedItems1, setSelectedItems1] = useState(0);
    const [selectedItems2, setSelectedItems2] = useState(0);
    const [selectedItems3, setSelectedItems3] = useState(0);
    const [selectedItems4, setSelectedItems4] = useState(0);
    const [selectedItems5, setSelectedItems5] = useState(0);
    const [selectedItems6, setSelectedItems6] = useState(0);
    const [selectedItems7, setSelectedItems7] = useState(0);
    const [selectedItems8, setSelectedItems8] = useState(0);
    const [selectedItems9, setSelectedItems9] = useState(0);
    const [selectedItems10, setSelectedItems10] = useState(0);
    const [selectedItems11, setSelectedItems11] = useState(0);
    const [firstClick, setFirstClick] = useState(false);
    const [secondClick,setSecondClick]=useState(false)
    const [thirdClick,setThirdClick]=useState(false)
    const [forthClick,setForthClick]=useState(false)
    const [fiveClick,setFiveClick]=useState(false)
    const [sixClick,setSixClick]=useState(false)
    const [savenClick,setSavenClick]=useState(false)
    const [eightClick,setEightClick]=useState(false)
    const [nineClick,setNineClick]=useState(false)
    const [tenClick,setTenClick]=useState(false)
    const [elevenClick,setElevenClick]=useState(false)
    const [twelthClick,setTwelthClick]=useState(false)
  


    useEffect(() => {
        fetchData(activeButton);
    }, [activeButton]);

    
    const handleButtonClick1 = () => {
        setPopupOpen(true);
      };
    
    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const fetchData = async (endpoint) => {
        try {
            // Simulated fetch call
            const result = {
                evaluation: [],
                treatment: [],
                surveillance: []
            };
            setData(result[endpoint]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleButtonClick = (section) => {
        const sectionElement = document.getElementById(`${section}Section`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
          setActiveButton(section);
        }
      };

    const buttonIsActive = (buttonEndpoint) => {
        return activeButton === buttonEndpoint ? 'active' : '';
    };

   // dropdown icon implement
    const toggleDropdown = (checkboxId) => {
        if (checkboxId === 'vehicle1') {
            setCheckboxDropdowns((prevState) => ({
                ...prevState,
                [checkboxId]: !prevState[checkboxId]
            }));
        }
    };
    const toggleDropdown1 = (checkboxId1) => {
        if (checkboxId1 === 'vehicle2') {
            setCheckboxDropdowns1((prevState) => ({
                ...prevState,
                [checkboxId1]: !prevState[checkboxId1]
            }));
        }
    };
    const toggleDropdown2 = (checkboxId2) => {
        if (checkboxId2 === 'vehicle3') {
            setCheckboxDropdowns2((prevState) => ({
                ...prevState,
                [checkboxId2]: !prevState[checkboxId2]
            }));
        }
    };

    const toggleDropdown3 = (checkboxId3) => {
        if (checkboxId3 === 'vehicle4') {
            setCheckboxDropdowns3((prevState) => ({
                ...prevState,
                [checkboxId3]: !prevState[checkboxId3]
            }));
        }
    };

    const toggleDropdown4 = (checkboxId4) => {
        if (checkboxId4 === 'vehicle5') {
            setCheckboxDropdowns4((prevState) => ({
                ...prevState,
                [checkboxId4]: !prevState[checkboxId4]
            }));
        }
    };

    const toggleDropdown5 = (checkboxId5) => {
        if (checkboxId5 === 'vehicle6') {
            setCheckboxDropdowns5((prevState) => ({
                ...prevState,
                [checkboxId5]: !prevState[checkboxId5]
            }));
        }
    };
        
    const toggleDropdown6 = (checkboxId6) => {
        if (checkboxId6 === 'vehicle7') {
            setCheckboxDropdowns6((prevState) => ({
                ...prevState,
                [checkboxId6]: !prevState[checkboxId6]
            }));
        }
    };

    const toggleDropdown7 = (checkboxId7) => {
        if (checkboxId7 === 'vehicle8') {
            setCheckboxDropdowns7((prevState) => ({
                ...prevState,
                [checkboxId7]: !prevState[checkboxId7]
            }));
        }
    };

    const toggleDropdown8 = (checkboxId8) => {
        if (checkboxId8 === 'vehicle9') {
            setCheckboxDropdowns8((prevState) => ({
                ...prevState,
                [checkboxId8]: !prevState[checkboxId8]
            }));
        }
    };

    const toggleDropdown9 = (checkboxId9) => {
        if (checkboxId9 === 'vehicle10') {
            setCheckboxDropdowns9((prevState) => ({
                ...prevState,
                [checkboxId9]: !prevState[checkboxId9]
            }));
        }
    };

    const toggleDropdown10 = (checkboxId10) => {
        if (checkboxId10 === 'vehicle11') {
            setCheckboxDropdowns10((prevState) => ({
                ...prevState,
                [checkboxId10]: !prevState[checkboxId10]
            }));
        }
    };

    const toggleDropdown11 = (checkboxId11) => {
        if (checkboxId11 === 'vehicle12') {
            setCheckboxDropdowns11((prevState) => ({
                ...prevState,
                [checkboxId11]: !prevState[checkboxId11]
            }));
        }
    };
  
      
    // Dropdown fuctionlity 
    // first checkbox
    const handleCheckboxChange = (checkboxId) => {
        if (checkboxId === 'vehicle1') {
            const isDropdownChecked =
                checkboxDropdowns.surgeonCheckbox &&
                checkboxDropdowns.oncologistCheckbox &&
                checkboxDropdowns.anesthesiologistCheckbox;
    
            const updatedDropdowns = {
                ...checkboxDropdowns,
                surgeonCheckbox: !isDropdownChecked,
                oncologistCheckbox: !isDropdownChecked,
                anesthesiologistCheckbox: !isDropdownChecked,
            };
    
            setCheckboxDropdowns(updatedDropdowns);
    
            const dropdownCheckboxes = [
                'surgeonCheckbox',
                'oncologistCheckbox',
                'anesthesiologistCheckbox',
            ];
    
            // Calculate the count of checkboxes in the dropdown
            const dropdownCheckboxCount = dropdownCheckboxes.filter(
                checkbox => updatedDropdowns[checkbox]
            ).length;
    
            // Calculate total price based on the number of checkboxes selected
            let totalPriceValue = 1547;
            if (isDropdownChecked) {
                totalPriceValue = 0;
            }
            setTotalPrice(`$${totalPriceValue}`);
            setSelectedItems(dropdownCheckboxCount);
        } else {
            const updatedCheckboxes = {
                ...checkboxDropdowns,
                [checkboxId]: !checkboxDropdowns[checkboxId],
            };
    
            let totalPriceValue = 0;
            let selectedCount = 0;
            Object.entries(updatedCheckboxes).forEach(([key, value]) => {
                if (
                    key !== 'vehicle1' &&
                    value === true
                ) {
                    selectedCount++;
                    switch (key) {
                        case 'surgeonCheckbox':
                            totalPriceValue += 747;
                            break;
                        case 'oncologistCheckbox':
                            totalPriceValue += 500;
                            break;
                        case 'anesthesiologistCheckbox':
                            totalPriceValue += 300;
                            break;
                        default:
                            break;
                    }
                }
            });
    
            const anyCheckboxSelected = Object.values(checkboxDropdowns).some(value => value);
            setSecondClick(anyCheckboxSelected);
            setSelectedItems(selectedCount);
            setTotalPrice(`$${totalPriceValue}`);
    
            if (
                checkboxId === 'surgeonCheckbox' &&
                checkboxId === 'oncologistCheckbox' &&
                checkboxId === 'anesthesiologistCheckbox'
            ) {
                // If any specialist checkbox is unchecked, uncheck the master checkbox
                setCheckboxDropdowns({
                    ...updatedCheckboxes,
                    vehicle1: false
                });
            } else {
                setCheckboxDropdowns(updatedCheckboxes);
            }
        }
        if (!firstClick) {
            setFirstClick(true);
        }
    };

    // second checkbox
    const handleCheckboxChange1 = (checkboxId1) => {
        if (checkboxId1 === 'vehicle2') {
            const isDropdownChecked =
                checkboxDropdowns1.surgeonCheckbox1 &&
                checkboxDropdowns1.oncologistCheckbox1 &&
                checkboxDropdowns1.anesthesiologistCheckbox1;
    
            const updatedDropdowns1 = {
                ...checkboxDropdowns1,
                surgeonCheckbox1: !isDropdownChecked,
                oncologistCheckbox1: !isDropdownChecked,
                anesthesiologistCheckbox1: !isDropdownChecked,
            };
    
            setCheckboxDropdowns1(updatedDropdowns1);
    
            const dropdownCheckboxes = [
                'surgeonCheckbox1',
                'oncologistCheckbox1',
                'anesthesiologistCheckbox1',
            ];
    
            // Calculate the count of checkboxes in the dropdown
            const dropdownCheckboxCount1 = dropdownCheckboxes.filter(
                checkbox => updatedDropdowns1[checkbox]
            ).length;
    
            // Calculate total price based on the number of checkboxes selected
            let totalPrice1Value = 1547;
            if (isDropdownChecked) {
                totalPrice1Value = 0;
            }
            setTotalPrice1(`$${totalPrice1Value}`);
            setSelectedItems1(dropdownCheckboxCount1);
        } else {
            const updatedCheckboxes1 = {
                ...checkboxDropdowns1,
                [checkboxId1]: !checkboxDropdowns1[checkboxId1],
            };
    
            let totalPrice1Value = 0;
            let selectedCount1 = 0;
            Object.entries(updatedCheckboxes1).forEach(([key, value]) => {
                if (
                    key !== 'vehicle2' &&
                    value === true
                ) {
                    selectedCount1++;
                    switch (key) {
                        case 'surgeonCheckbox1':
                            totalPrice1Value += 747;
                            break;
                        case 'oncologistCheckbox1':
                            totalPrice1Value += 500;
                            break;
                        case 'anesthesiologistCheckbox1':
                            totalPrice1Value += 300;
                            break;
                        default:
                            break;
                    }
                }
            });
    
            const anyCheckboxSelected = Object.values(checkboxDropdowns1).some(value => value);
            setSecondClick(anyCheckboxSelected);
            setSelectedItems1(selectedCount1);
            setTotalPrice1(`$${totalPrice1Value}`);
    
            if (
                checkboxId1 === 'surgeonCheckbox1' &&
                checkboxId1 === 'oncologistCheckbox1' &&
                checkboxId1 === 'anesthesiologistCheckbox1'
            ) {
                // If any specialist checkbox is unchecked, uncheck the master checkbox
                setCheckboxDropdowns1({
                    ...updatedCheckboxes1,
                    vehicle2: false
                });
            } else {
                setCheckboxDropdowns1(updatedCheckboxes1);
            }
        }
        if (!secondClick) {
            setSecondClick(true);
        }
    };
    

   //third handlecheckbox
   const handleCheckboxChange2 = (checkboxId2) => {
    if (checkboxId2 === 'vehicle3') {
        const isDropdownChecked =
            checkboxDropdowns2.surgeonCheckbox2 &&
            checkboxDropdowns2.oncologistCheckbox2 &&
            checkboxDropdowns2.anesthesiologistCheckbox2;

        const updatedDropdowns2 = {
            ...checkboxDropdowns2,
            surgeonCheckbox2: !isDropdownChecked,
            oncologistCheckbox2: !isDropdownChecked,
            anesthesiologistCheckbox2: !isDropdownChecked,
        };

        setCheckboxDropdowns2(updatedDropdowns2);

        const dropdownCheckboxes = [
            'surgeonCheckbox2',
            'oncologistCheckbox2',
            'anesthesiologistCheckbox2',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount2 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns2[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice2Value = 2147;
        if (isDropdownChecked) {
            totalPrice2Value = 0;
        }
        setTotalPrice2(`$${totalPrice2Value}`);
        setSelectedItems2(dropdownCheckboxCount2);
    } else {
        const updatedCheckboxes2 = {
            ...checkboxDropdowns2,
            [checkboxId2]: !checkboxDropdowns2[checkboxId2],
        };

        let totalPrice2Value = 0;
        let selectedCount2 = 0;
        Object.entries(updatedCheckboxes2).forEach(([key, value]) => {
            if (
                key !== 'vehicle3' &&
                value === true
            ) {
                selectedCount2++;
                switch (key) {
                    case 'surgeonCheckbox2':
                        totalPrice2Value += 747;
                        break;
                    case 'oncologistCheckbox2':
                        totalPrice2Value += 600;
                        break;
                    case 'anesthesiologistCheckbox2':
                        totalPrice2Value += 800;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns2).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems2(selectedCount2);
        setTotalPrice2(`$${totalPrice2Value}`);

        if (
            checkboxId2 === 'surgeonCheckbox2' &&
            checkboxId2 === 'oncologistCheckbox2' &&
            checkboxId2 === 'anesthesiologistCheckbox2'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns2({
                ...updatedCheckboxes2,
                vehicle3: false
            });
        } else {
            setCheckboxDropdowns2(updatedCheckboxes2);
        }
    }
    if (!thirdClick) {
        setThirdClick(true);
    }
};

// forth handle checkbox
const handleCheckboxChange3 = (checkboxId3) => {
    if (checkboxId3 === 'vehicle4') {
        const isDropdownChecked =
            checkboxDropdowns3.surgeonCheckbox3 &&
            checkboxDropdowns3.oncologistCheckbox3 &&
            checkboxDropdowns3.anesthesiologistCheckbox3;

        const updatedDropdowns3 = {
            ...checkboxDropdowns3,
            surgeonCheckbox3: !isDropdownChecked,
            oncologistCheckbox3: !isDropdownChecked,
            anesthesiologistCheckbox3: !isDropdownChecked,
        };

        setCheckboxDropdowns3(updatedDropdowns3);

        const dropdownCheckboxes = [
            'surgeonCheckbox3',
            'oncologistCheckbox3',
            'anesthesiologistCheckbox3',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount3 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns3[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice3Value = 1547;
        if (isDropdownChecked) {
            totalPrice3Value = 0;
        }
        setTotalPrice3(`$${totalPrice3Value}`);
        setSelectedItems3(dropdownCheckboxCount3);
    } else {
        const updatedCheckboxes3 = {
            ...checkboxDropdowns3,
            [checkboxId3]: !checkboxDropdowns3[checkboxId3],
        };

        let totalPrice3Value = 0;
        let selectedCount3 = 0;
        Object.entries(updatedCheckboxes3).forEach(([key, value]) => {
            if (
                key !== 'vehicle4' &&
                value === true
            ) {
                selectedCount3++;
                switch (key) {
                    case 'surgeonCheckbox3':
                        totalPrice3Value += 747;
                        break;
                    case 'oncologistCheckbox3':
                        totalPrice3Value += 500;
                        break;
                    case 'anesthesiologistCheckbox3':
                        totalPrice3Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns3).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems3(selectedCount3);
        setTotalPrice3(`$${totalPrice3Value}`);

        if (
            checkboxId3 === 'surgeonCheckbox3' &&
            checkboxId3 === 'oncologistCheckbox3' &&
            checkboxId3 === 'anesthesiologistCheckbox3'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns3({
                ...updatedCheckboxes3,
                vehicle4: false
            });
        } else {
            setCheckboxDropdowns3(updatedCheckboxes3);
        }
    }
    if (!forthClick) {
        setForthClick(true);
    }
};
 


// treatement first box 
const handleCheckboxChange4 = (checkboxId4) => {
    if (checkboxId4 === 'vehicle5') {
        const isDropdownChecked =
            checkboxDropdowns4.surgeonCheckbox4 &&
            checkboxDropdowns4.oncologistCheckbox4 &&
            checkboxDropdowns4.anesthesiologistCheckbox4;

        const updatedDropdowns4 = {
            ...checkboxDropdowns4,
            surgeonCheckbox4: !isDropdownChecked,
            oncologistCheckbox4: !isDropdownChecked,
            anesthesiologistCheckbox4: !isDropdownChecked,
        };

        setCheckboxDropdowns4(updatedDropdowns4);

        const dropdownCheckboxes = [
            'surgeonCheckbox4',
            'oncologistCheckbox4',
            'anesthesiologistCheckbox4',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount4 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns4[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice4Value = 1547;
        if (isDropdownChecked) {
            totalPrice4Value = 0;
        }
        setTotalPrice4(`$${totalPrice4Value}`);
        setSelectedItems4(dropdownCheckboxCount4);
    } else {
        const updatedCheckboxes4 = {
            ...checkboxDropdowns4,
            [checkboxId4]: !checkboxDropdowns4[checkboxId4],
        };

        let totalPrice4Value = 0;
        let selectedCount4 = 0;
        Object.entries(updatedCheckboxes4).forEach(([key, value]) => {
            if (
                key !== 'vehicle5' &&
                value === true
            ) {
                selectedCount4++;
                switch (key) {
                    case 'surgeonCheckbox4':
                        totalPrice4Value += 747;
                        break;
                    case 'oncologistCheckbox4':
                        totalPrice4Value += 500;
                        break;
                    case 'anesthesiologistCheckbox4':
                        totalPrice4Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns4).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems4(selectedCount4);
        setTotalPrice4(`$${totalPrice4Value}`);

        if (
            checkboxId4 === 'surgeonCheckbox4' &&
            checkboxId4 === 'oncologistCheckbox4' &&
            checkboxId4 === 'anesthesiologistCheckbox4'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns4({
                ...updatedCheckboxes4,
                vehicle5: false
            });
        } else {
            setCheckboxDropdowns4(updatedCheckboxes4);
        }
    }
    if (!fiveClick) {
        setFiveClick(true);
    }
};

// treatement second box 
const handleCheckboxChange5 = (checkboxId5) => {
    if (checkboxId5 === 'vehicle6') {
        const isDropdownChecked =
            checkboxDropdowns5.surgeonCheckbox5 &&
            checkboxDropdowns5.oncologistCheckbox5 &&
            checkboxDropdowns5.anesthesiologistCheckbox5;

        const updatedDropdowns5 = {
            ...checkboxDropdowns5,
            surgeonCheckbox5: !isDropdownChecked,
            oncologistCheckbox5: !isDropdownChecked,
            anesthesiologistCheckbox5: !isDropdownChecked,
        };

        setCheckboxDropdowns5(updatedDropdowns5);

        const dropdownCheckboxes = [
            'surgeonCheckbox5',
            'oncologistCheckbox5',
            'anesthesiologistCheckbox5',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount5 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns5[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice5Value = 1547;
        if (isDropdownChecked) {
            totalPrice5Value = 0;
        }
        setTotalPrice5(`$${totalPrice5Value}`);
        setSelectedItems5(dropdownCheckboxCount5);
    } else {
        const updatedCheckboxes5 = {
            ...checkboxDropdowns5,
            [checkboxId5]: !checkboxDropdowns5[checkboxId5],
        };

        let totalPrice5Value = 0;
        let selectedCount5 = 0;
        Object.entries(updatedCheckboxes5).forEach(([key, value]) => {
            if (
                key !== 'vehicle6' &&
                value === true
            ) {
                selectedCount5++;
                switch (key) {
                    case 'surgeonCheckbox5':
                        totalPrice5Value += 747;
                        break;
                    case 'oncologistCheckbox5':
                        totalPrice5Value += 500;
                        break;
                    case 'anesthesiologistCheckbox5':
                        totalPrice5Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns5).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems5(selectedCount5);
        setTotalPrice5(`$${totalPrice5Value}`);

        if (
            checkboxId5 === 'surgeonCheckbox5' &&
            checkboxId5 === 'oncologistCheckbox5' &&
            checkboxId5 === 'anesthesiologistCheckbox5'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns5({
                ...updatedCheckboxes5,
                vehicle6: false
            });
        } else {
            setCheckboxDropdowns5(updatedCheckboxes5);
        }
    }
    if (!sixClick) {
        setSixClick(true);
    }
};


// treatment third box
const handleCheckboxChange6 = (checkboxId6) => {
    if (checkboxId6 === 'vehicle7') {
        const isDropdownChecked =
            checkboxDropdowns6.surgeonCheckbox6 &&
            checkboxDropdowns6.oncologistCheckbox6 &&
            checkboxDropdowns6.anesthesiologistCheckbox6;

        const updatedDropdowns6 = {
            ...checkboxDropdowns6,
            surgeonCheckbox6: !isDropdownChecked,
            oncologistCheckbox6: !isDropdownChecked,
            anesthesiologistCheckbox6: !isDropdownChecked,
        };

        setCheckboxDropdowns6(updatedDropdowns6);

        const dropdownCheckboxes = [
            'surgeonCheckbox6',
            'oncologistCheckbox6',
            'anesthesiologistCheckbox6',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount6 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns6[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice6Value = 2147;
        if (isDropdownChecked) {
            totalPrice6Value = 0;
        }
        setTotalPrice6(`$${totalPrice6Value}`);
        setSelectedItems6(dropdownCheckboxCount6);
    } else {
        const updatedCheckboxes6 = {
            ...checkboxDropdowns6,
            [checkboxId6]: !checkboxDropdowns6[checkboxId6],
        };

        let totalPrice6Value = 0;
        let selectedCount6 = 0;
        Object.entries(updatedCheckboxes6).forEach(([key, value]) => {
            if (
                key !== 'vehicle7' &&
                value === true
            ) {
                selectedCount6++;
                switch (key) {
                    case 'surgeonCheckbox6':
                        totalPrice6Value += 747;
                        break;
                    case 'oncologistCheckbox6':
                        totalPrice6Value += 600;
                        break;
                    case 'anesthesiologistCheckbox6':
                        totalPrice6Value += 800;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns6).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems6(selectedCount6);
        setTotalPrice6(`$${totalPrice6Value}`);

        if (
            checkboxId6 === 'surgeonCheckbox6' &&
            checkboxId6 === 'oncologistCheckbox6' &&
            checkboxId6 === 'anesthesiologistCheckbox6'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns6({
                ...updatedCheckboxes6,
                vehicle7: false
            });
        } else {
            setCheckboxDropdowns6(updatedCheckboxes6);
        }
    }
    if (!savenClick) {
        setSavenClick(true);
    }
};

// treatment 4 handleclick
const handleCheckboxChange7 = (checkboxId7) => {
    if (checkboxId7 === 'vehicle8') {
        const isDropdownChecked =
            checkboxDropdowns7.surgeonCheckbox7 &&
            checkboxDropdowns7.oncologistCheckbox7 &&
            checkboxDropdowns7.anesthesiologistCheckbox7;

        const updatedDropdowns7 = {
            ...checkboxDropdowns7,
            surgeonCheckbox7: !isDropdownChecked,
            oncologistCheckbox7: !isDropdownChecked,
            anesthesiologistCheckbox7: !isDropdownChecked,
        };

        setCheckboxDropdowns7(updatedDropdowns7);

        const dropdownCheckboxes = [
            'surgeonCheckbox7',
            'oncologistCheckbox7',
            'anesthesiologistCheckbox7',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount7 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns7[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice7Value = 1547;
        if (isDropdownChecked) {
            totalPrice7Value = 0;
        }
        setTotalPrice7(`$${totalPrice7Value}`);
        setSelectedItems7(dropdownCheckboxCount7);
    } else {
        const updatedCheckboxes7 = {
            ...checkboxDropdowns7,
            [checkboxId7]: !checkboxDropdowns7[checkboxId7],
        };

        let totalPrice7Value = 0;
        let selectedCount7 = 0;
        Object.entries(updatedCheckboxes7).forEach(([key, value]) => {
            if (
                key !== 'vehicle8' &&
                value === true
            ) {
                selectedCount7++;
                switch (key) {
                    case 'surgeonCheckbox7':
                        totalPrice7Value += 747;
                        break;
                    case 'oncologistCheckbox7':
                        totalPrice7Value += 500;
                        break;
                    case 'anesthesiologistCheckbox7':
                        totalPrice7Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns7).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems7(selectedCount7);
        setTotalPrice7(`$${totalPrice7Value}`);

        if (
            checkboxId7 === 'surgeonCheckbox7' &&
            checkboxId7 === 'oncologistCheckbox7' &&
            checkboxId7 === 'anesthesiologistCheckbox7'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns7({
                ...updatedCheckboxes7,
                vehicle8: false
            });
        } else {
            setCheckboxDropdowns7(updatedCheckboxes7);
        }
    }
    if (!eightClick) {
        setEightClick(true);
    }
};

// SURVEILLANCE  first checkbox
const handleCheckboxChange8 = (checkboxId8) => {
    if (checkboxId8 === 'vehicle9') {
        const isDropdownChecked =
            checkboxDropdowns8.surgeonCheckbox8 &&
            checkboxDropdowns8.oncologistCheckbox8 &&
            checkboxDropdowns8.anesthesiologistCheckbox8;

        const updatedDropdowns8 = {
            ...checkboxDropdowns8,
            surgeonCheckbox8: !isDropdownChecked,
            oncologistCheckbox8: !isDropdownChecked,
            anesthesiologistCheckbox8: !isDropdownChecked,
        };

        setCheckboxDropdowns8(updatedDropdowns8);

        const dropdownCheckboxes = [
            'surgeonCheckbox8',
            'oncologistCheckbox8',
            'anesthesiologistCheckbox8',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount8 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns8[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice8Value = 1547;
        if (isDropdownChecked) {
            totalPrice8Value = 0;
        }
        setTotalPrice8(`$${totalPrice8Value}`);
        setSelectedItems8(dropdownCheckboxCount8);
    } else {
        const updatedCheckboxes8 = {
            ...checkboxDropdowns8,
            [checkboxId8]: !checkboxDropdowns8[checkboxId8],
        };

        let totalPrice8Value = 0;
        let selectedCount8 = 0;
        Object.entries(updatedCheckboxes8).forEach(([key, value]) => {
            if (
                key !== 'vehicle9' &&
                value === true
            ) {
                selectedCount8++;
                switch (key) {
                    case 'surgeonCheckbox8':
                        totalPrice8Value += 747;
                        break;
                    case 'oncologistCheckbox8':
                        totalPrice8Value += 500;
                        break;
                    case 'anesthesiologistCheckbox8':
                        totalPrice8Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns8).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems8(selectedCount8);
        setTotalPrice8(`$${totalPrice8Value}`);

        if (
            checkboxId8 === 'surgeonCheckbox8' &&
            checkboxId8 === 'oncologistCheckbox8' &&
            checkboxId8 === 'anesthesiologistCheckbox8'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns8({
                ...updatedCheckboxes8,
                vehicle9: false
            });
        } else {
            setCheckboxDropdowns8(updatedCheckboxes8);
        }
    }
    if (!nineClick) {
        setNineClick(true);
    }
};

// SURVEILLANCE  second checkbox
const handleCheckboxChange9 = (checkboxId9) => {
    if (checkboxId9 === 'vehicle10') {
        const isDropdownChecked =
            checkboxDropdowns9.surgeonCheckbox9 &&
            checkboxDropdowns9.oncologistCheckbox9 &&
            checkboxDropdowns9.anesthesiologistCheckbox9;

        const updatedDropdowns9 = {
            ...checkboxDropdowns9,
            surgeonCheckbox9: !isDropdownChecked,
            oncologistCheckbox9: !isDropdownChecked,
            anesthesiologistCheckbox9: !isDropdownChecked,
        };

        setCheckboxDropdowns9(updatedDropdowns9);

        const dropdownCheckboxes = [
            'surgeonCheckbox9',
            'oncologistCheckbox9',
            'anesthesiologistCheckbox9',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount9 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns9[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice9Value = 1547;
        if (isDropdownChecked) {
            totalPrice9Value = 0;
        }
        setTotalPrice9(`$${totalPrice9Value}`);
        setSelectedItems9(dropdownCheckboxCount9);
    } else {
        const updatedCheckboxes9 = {
            ...checkboxDropdowns9,
            [checkboxId9]: !checkboxDropdowns9[checkboxId9],
        };

        let totalPrice9Value = 0;
        let selectedCount9 = 0;
        Object.entries(updatedCheckboxes9).forEach(([key, value]) => {
            if (
                key !== 'vehicle10' &&
                value === true
            ) {
                selectedCount9++;
                switch (key) {
                    case 'surgeonCheckbox9':
                        totalPrice9Value += 747;
                        break;
                    case 'oncologistCheckbox9':
                        totalPrice9Value += 500;
                        break;
                    case 'anesthesiologistCheckbox9':
                        totalPrice9Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns9).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems9(selectedCount9);
        setTotalPrice9(`$${totalPrice9Value}`);

        if (
            checkboxId9 === 'surgeonCheckbox9' &&
            checkboxId9 === 'oncologistCheckbox9' &&
            checkboxId9 === 'anesthesiologistCheckbox9'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns9({
                ...updatedCheckboxes9,
                vehicle10: false
            });
        } else {
            setCheckboxDropdowns9(updatedCheckboxes9);
        }
    }
    if (!tenClick) {
        setTenClick(true);
    }
};

// SURVEILLANCE  third checkbox

const handleCheckboxChange10 = (checkboxId10) => {
    if (checkboxId10 === 'vehicle11') {
        const isDropdownChecked =
            checkboxDropdowns10.surgeonCheckbox10 &&
            checkboxDropdowns10.oncologistCheckbox10 &&
            checkboxDropdowns10.anesthesiologistCheckbox10;

        const updatedDropdowns10 = {
            ...checkboxDropdowns10,
            surgeonCheckbox10: !isDropdownChecked,
            oncologistCheckbox10: !isDropdownChecked,
            anesthesiologistCheckbox10: !isDropdownChecked,
        };

        setCheckboxDropdowns10(updatedDropdowns10);

        const dropdownCheckboxes = [
            'surgeonCheckbox10',
            'oncologistCheckbox10',
            'anesthesiologistCheckbox10',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount10 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns10[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice10Value = 2147;
        if (isDropdownChecked) {
            totalPrice10Value = 0;
        }
        setTotalPrice10(`$${totalPrice10Value}`);
        setSelectedItems10(dropdownCheckboxCount10);
    } else {
        const updatedCheckboxes10 = {
            ...checkboxDropdowns10,
            [checkboxId10]: !checkboxDropdowns10[checkboxId10],
        };

        let totalPrice10Value = 0;
        let selectedCount10 = 0;
        Object.entries(updatedCheckboxes10).forEach(([key, value]) => {
            if (
                key !== 'vehicle11' &&
                value === true
            ) {
                selectedCount10++;
                switch (key) {
                    case 'surgeonCheckbox10':
                        totalPrice10Value += 747;
                        break;
                    case 'oncologistCheckbox10':
                        totalPrice10Value += 600;
                        break;
                    case 'anesthesiologistCheckbox10':
                        totalPrice10Value += 800;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns10).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems10(selectedCount10);
        setTotalPrice10(`$${totalPrice10Value}`);

        if (
            checkboxId10 === 'surgeonCheckbox10' &&
            checkboxId10 === 'oncologistCheckbox10' &&
            checkboxId10 === 'anesthesiologistCheckbox10'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns10({
                ...updatedCheckboxes10,
                vehicle11: false
            });
        } else {
            setCheckboxDropdowns10(updatedCheckboxes10);
        }
    }
    if (!elevenClick) {
        setElevenClick(true);
    }
};


// SURVEILLANCE  forth checkbox
const handleCheckboxChange11 = (checkboxId11) => {
    if (checkboxId11 === 'vehicle12') {
        const isDropdownChecked =
            checkboxDropdowns11.surgeonCheckbox11 &&
            checkboxDropdowns11.oncologistCheckbox11 &&
            checkboxDropdowns11.anesthesiologistCheckbox11;

        const updatedDropdowns11 = {
            ...checkboxDropdowns11,
            surgeonCheckbox11: !isDropdownChecked,
            oncologistCheckbox11: !isDropdownChecked,
            anesthesiologistCheckbox11: !isDropdownChecked,
        };

        setCheckboxDropdowns11(updatedDropdowns11);

        const dropdownCheckboxes = [
            'surgeonCheckbox11',
            'oncologistCheckbox11',
            'anesthesiologistCheckbox11',
        ];

        // Calculate the count of checkboxes in the dropdown
        const dropdownCheckboxCount11 = dropdownCheckboxes.filter(
            checkbox => updatedDropdowns11[checkbox]
        ).length;

        // Calculate total price based on the number of checkboxes selected
        let totalPrice11Value = 1547;
        if (isDropdownChecked) {
            totalPrice11Value = 0;
        }
        setTotalPrice11(`$${totalPrice11Value}`);
        setSelectedItems11(dropdownCheckboxCount11);
    } else {
        const updatedCheckboxes11 = {
            ...checkboxDropdowns11,
            [checkboxId11]: !checkboxDropdowns11[checkboxId11],
        };

        let totalPrice11Value = 0;
        let selectedCount11 = 0;
        Object.entries(updatedCheckboxes11).forEach(([key, value]) => {
            if (
                key !== 'vehicle12' &&
                value === true
            ) {
                selectedCount11++;
                switch (key) {
                    case 'surgeonCheckbox11':
                        totalPrice11Value += 747;
                        break;
                    case 'oncologistCheckbox11':
                        totalPrice11Value += 500;
                        break;
                    case 'anesthesiologistCheckbox11':
                        totalPrice11Value += 300;
                        break;
                    default:
                        break;
                }
            }
        });

        const anyCheckboxSelected = Object.values(checkboxDropdowns11).some(value => value);
        setSecondClick(anyCheckboxSelected);
        setSelectedItems11(selectedCount11);
        setTotalPrice11(`$${totalPrice11Value}`);

        if (
            checkboxId11 === 'surgeonCheckbox11' &&
            checkboxId11 === 'oncologistCheckbox11' &&
            checkboxId11 === 'anesthesiologistCheckbox11'
        ) {
            // If any specialist checkbox is unchecked, uncheck the master checkbox
            setCheckboxDropdowns11({
                ...updatedCheckboxes11,
                vehicle12: false
            });
        } else {
            setCheckboxDropdowns11(updatedCheckboxes11);
        }
    }
    if (!twelthClick) {
        setTwelthClick(true);
    }
};
  

const totalCombinedPrice = () => {
    const getPrice = (price) => parseInt(price.replace('$', '')) || 0;

    const prices = [
        getPrice(totalPrice),
        getPrice(totalPrice1),
        getPrice(totalPrice2),
        getPrice(totalPrice3),
        getPrice(totalPrice4),
        getPrice(totalPrice5),
        getPrice(totalPrice6),
        getPrice(totalPrice7),
        getPrice(totalPrice8),
        getPrice(totalPrice9),
        getPrice(totalPrice10),
        getPrice(totalPrice11),
    ];

    return prices.reduce((acc, currentPrice) => acc + currentPrice, 0);
};
    
    // Array of checkbox items
    const checkboxes = [
        { id: 'vehicle1', label: 'Specialist office visits', price: '$1547' },
        { id: 'vehicle2', label: 'Imaging studies', price: '$2147' },
        { id: 'vehicle3', label: 'Lab tests', price: '$2147' },
        { id: 'vehicle4', label: 'Pre-treatment tests', price: '$1547' },
        { id: 'vehicle5', label: 'Specialist office visits', price: '$1547' },
        { id: 'vehicle6', label: 'Imaging studies', price: '$2147' },
        { id: 'vehicle7', label: 'Lab tests', price: '$2147' },
        { id: 'vehicle8', label: 'Pre-treatment tests', price: '$1547' },
        { id: 'vehicle9', label: 'Specialist office visits', price: '$1547' },
        { id: 'vehicle10', label: 'Imaging studies', price: '$2147' },
        { id: 'vehicle11', label: 'Lab tests', price: '$2147' },
        { id: 'vehicle12', label: 'Pre-treatment tests', price: '$1547' }
    ];

    return (
        <div className="button-container">
            <div className="button-wrapper">
                <div className={`button-group ${buttonIsActive('evaluation')}`}>
                    <p onClick={() => handleButtonClick('evaluation')}>
                        Evaluation
                    </p>
                    <div className="gap"></div>
                </div>

                <div className={`button-group ${buttonIsActive('treatment')}`}>
                    <p onClick={() => handleButtonClick('treatment')}>
                        Treatment
                    </p>
                    <div className="gap"></div>
                </div>

                <div className={`button-group ${buttonIsActive('surveillance')}`}>
                   <p onClick={() => handleButtonClick('surveillance')}>
                    Surveillance
                   </p>
                </div>
            </div>
            {/* Render multiple checkboxes */}
            <div className='checkbox_buttons'>
            <div className="selection-summary">
                <div className="end-paragraph"> 
                         
                <p>Total Esmited Cost</p>
                    {((selectedItems > 0 && firstClick) || (selectedItems1 > 0 && secondClick) || (selectedItems2 > 0 && thirdClick) || (selectedItems3 > 0 && forthClick || 
                    selectedItems4 > 0 && fiveClick || selectedItems5 > 0 && sixClick || 
                    selectedItems6 > 0 && savenClick ||  selectedItems7 > 0 && eightClick || 
                    selectedItems8 > 0 && nineClick || selectedItems9 > 0 && tenClick || 
                    selectedItems10 > 0 && elevenClick || selectedItems11 > 0 && twelthClick)) && (
                        <p>
                            {selectedItems + selectedItems1 + selectedItems2 + selectedItems3 + selectedItems4 + selectedItems5 + selectedItems6 
                            +selectedItems7 + selectedItems8 + selectedItems9 +selectedItems10 + selectedItems11} ITEM(S) SELECTED - Total Price ${totalCombinedPrice()}
                        </p>
                    )}
                   <button onClick={handleButtonClick1} className='hwbutton'>View Complete Report</button>
                </div>
            </div>
            {/* ------------------------------------------------------ */}




            {isPopupOpen && (
  <div className='popup'>
    <div className='popup-content'>
      <div className='popup-heading'>
        <p>Selected procedure(s)</p>
        <p>Cost</p>
      </div>
      {checkboxes.map((checkbox, index) => (
        checkbox.id === 'vehicle1' && (
          checkboxDropdowns[checkbox.id] && (
            <div key={index} className='popup-checkbox'>
              <p>{checkbox.label}</p>
              <p>${totalCombinedPrice()}</p>
            </div>
          )
        )
      ))}
      <div className='HwTotalCount'>
      <h4>Total Estimated Cost:<span>${totalCombinedPrice()}</span></h4>
      <p>Based on national average figures</p>

      <DownloadPDFButton totalAmount={totalCombinedPrice()} />
      </div>
      <button className='HwPopupCloseButton' onClick={handleClosePopup}>X</button><br/>
     

      <div>
        <h5>Enter your e-mail address to get a detailed report of the cost estimation for your search</h5>
        <div className='hwbillemail'>
            <input type="Email" placeholder='Email'/>
            <button className='hwbtnsubmit'>Submit</button>
        </div>
        <p className='hwemailparagraph'>We never share or inappropriately use your personal data. See our <span style={{color:'#6E2FEB'}}>Privacy Policy</span> 
        for more information. By continuing, you agree to our <span style={{color:'#6E2FEB'}}>Terms of Use.</span></p>
      </div>
    </div>
  </div>
)}


<div></div>
            <div id='evaluationSection'>
            <p className="checkbox-heading">EVALUATION</p>
            </div>

            { /* first box */}
            {checkboxes.map((checkbox, index) => (
  <div key={index} className='checkbox_button'>
    {checkbox.id === 'vehicle1' && (
      <>
        <input
          type="checkbox"
          id={checkbox.id}
          name={checkbox.id}
          value={checkbox.label}
          checked={
            checkboxDropdowns.surgeonCheckbox &&
            checkboxDropdowns.oncologistCheckbox &&
            checkboxDropdowns.anesthesiologistCheckbox
          }
          onChange={() => handleCheckboxChange(checkbox.id)}
        />
        <label htmlFor={checkbox.id}>{checkbox.label}</label>
        <label className="checkbox_price">
          <p>$1547</p>
          <div
            className="dropdown-icon"
            onClick={() => toggleDropdown(checkbox.id)}
          >
            <p>
              <i className="arrow down"></i>
            </p>
          </div>
        </label>
        {checkboxDropdowns[checkbox.id] && (
          <div className='dropdown-content dropdown-border'>
            <div className='dropdown-text'>
              {/* Checkbox content for Surgeon */}
              <input
                type="checkbox"
                id="surgeonCheckbox"
                checked={checkboxDropdowns.surgeonCheckbox}
                onChange={() => handleCheckboxChange('surgeonCheckbox')}
              />
              <label htmlFor="surgeonCheckbox"> Surgeon <span className='price'>$747</span></label>
            </div>
            <div className='dropdown-text'>
              <input
                type="checkbox"
                id="oncologistCheckbox"
                checked={checkboxDropdowns.oncologistCheckbox}
                onChange={() => handleCheckboxChange('oncologistCheckbox')}
              />
              <label htmlFor="oncologistCheckbox"> Medical Oncologist <span className='price'>$500</span></label>
            </div>
            <div className='dropdown-text'>
              <input
                type="checkbox"
                id="anesthesiologistCheckbox"
                checked={checkboxDropdowns.anesthesiologistCheckbox}
                onChange={() => handleCheckboxChange('anesthesiologistCheckbox')}
              />
              <label htmlFor="anesthesiologistCheckbox"> Anesthesiologist <span className='price'>$300</span></label>
            </div>
          </div>
        )}
      </>
    )}
  </div>
           ))}

      {/* second box */}
        {checkboxes.map((checkbox1, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox1.id === 'vehicle2' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox1.id}
                    name={checkbox1.id}
                    value={checkbox1.label}
                    checked={
                        checkboxDropdowns1.surgeonCheckbox1 &&
                        checkboxDropdowns1.oncologistCheckbox1 &&
                        checkboxDropdowns1.anesthesiologistCheckbox1
                    }
                    onChange={() => handleCheckboxChange1(checkbox1.id)}
                />
                <label htmlFor={checkbox1.id}>{checkbox1.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown1(checkbox1.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns1[checkbox1.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox1"
                                checked={checkboxDropdowns1.surgeonCheckbox1}
                                onChange={() => handleCheckboxChange1('surgeonCheckbox1')}
                            />
                            <label htmlFor="surgeonCheckbox1"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox1"
                                checked={checkboxDropdowns1.oncologistCheckbox1}
                                onChange={() => handleCheckboxChange1('oncologistCheckbox1')}
                            />
                            <label htmlFor="oncologistCheckbox1"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox1"
                                checked={checkboxDropdowns1.anesthesiologistCheckbox1}
                                onChange={() => handleCheckboxChange1('anesthesiologistCheckbox1')}
                            />
                            <label htmlFor="anesthesiologistCheckbox1"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
        {/* third box */}
            {checkboxes.map((checkbox2, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox2.id === 'vehicle3' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox2.id}
                    name={checkbox2.id}
                    value={checkbox2.label}
                    checked={
                        checkboxDropdowns2.surgeonCheckbox2 &&
                        checkboxDropdowns2.oncologistCheckbox2 &&
                        checkboxDropdowns2.anesthesiologistCheckbox2
                    }
                    onChange={() => handleCheckboxChange2(checkbox2.id)}
                />
                <label htmlFor={checkbox2.id}>{checkbox2.label}</label>
                <label className="checkbox_price">
                    <p>$2147</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown2(checkbox2.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns2[checkbox2.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox2"
                                checked={checkboxDropdowns2.surgeonCheckbox2}
                                onChange={() => handleCheckboxChange2('surgeonCheckbox2')}
                            />
                            <label htmlFor="surgeonCheckbox2"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox2"
                                checked={checkboxDropdowns2.oncologistCheckbox2}
                                onChange={() => handleCheckboxChange2('oncologistCheckbox2')}
                            />
                            <label htmlFor="oncologistCheckbox2"> Medical Oncologist <span className='price'>$600</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox2"
                                checked={checkboxDropdowns2.anesthesiologistCheckbox2}
                                onChange={() => handleCheckboxChange2('anesthesiologistCheckbox2')}
                            />
                            <label htmlFor="anesthesiologistCheckbox2"> Anesthesiologist <span className='price'>$800</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}

           {/* forth box */}
           {checkboxes.map((checkbox3, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox3.id === 'vehicle4' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox3.id}
                    name={checkbox3.id}
                    value={checkbox3.label}
                    checked={
                        checkboxDropdowns3.surgeonCheckbox3 &&
                        checkboxDropdowns3.oncologistCheckbox3 &&
                        checkboxDropdowns3.anesthesiologistCheckbox3
                    }
                    onChange={() => handleCheckboxChange3(checkbox3.id)}
                />
                <label htmlFor={checkbox3.id}>{checkbox3.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown3(checkbox3.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns3[checkbox3.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox3"
                                checked={checkboxDropdowns3.surgeonCheckbox3}
                                onChange={() => handleCheckboxChange3('surgeonCheckbox3')}
                            />
                            <label htmlFor="surgeonCheckbox3"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox3"
                                checked={checkboxDropdowns3.oncologistCheckbox3}
                                onChange={() => handleCheckboxChange3('oncologistCheckbox3')}
                            />
                            <label htmlFor="oncologistCheckbox3"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox3"
                                checked={checkboxDropdowns3.anesthesiologistCheckbox3}
                                onChange={() => handleCheckboxChange3('anesthesiologistCheckbox3')}
                            />
                            <label htmlFor="anesthesiologistCheckbox3"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
            <div id="treatmentSection">
              <p className="checkbox-heading">TREATMENT</p>
            </div>

    {/* treatement firstbox*/}
            {checkboxes.map((checkbox4, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox4.id === 'vehicle5' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox4.id}
                    name={checkbox4.id}
                    value={checkbox4.label}
                    checked={
                        checkboxDropdowns4.surgeonCheckbox4 &&
                        checkboxDropdowns4.oncologistCheckbox4 &&
                        checkboxDropdowns4.anesthesiologistCheckbox4
                    }
                    onChange={() => handleCheckboxChange4(checkbox4.id)}
                />
                <label htmlFor={checkbox4.id}>{checkbox4.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown4(checkbox4.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns4[checkbox4.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox4"
                                checked={checkboxDropdowns4.surgeonCheckbox4}
                                onChange={() => handleCheckboxChange4('surgeonCheckbox4')}
                            />
                            <label htmlFor="surgeonCheckbox4"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox4"
                                checked={checkboxDropdowns4.oncologistCheckbox4}
                                onChange={() => handleCheckboxChange4('oncologistCheckbox4')}
                            />
                            <label htmlFor="oncologistCheckbox4"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox4"
                                checked={checkboxDropdowns4.anesthesiologistCheckbox4}
                                onChange={() => handleCheckboxChange4('anesthesiologistCheckbox4')}
                            />
                            <label htmlFor="anesthesiologistCheckbox4"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}

     {/* treatement secondbox*/}
            {checkboxes.map((checkbox5, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox5.id === 'vehicle6' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox5.id}
                    name={checkbox5.id}
                    value={checkbox5.label}
                    checked={
                        checkboxDropdowns5.surgeonCheckbox5 &&
                        checkboxDropdowns5.oncologistCheckbox5 &&
                        checkboxDropdowns5.anesthesiologistCheckbox5
                    }
                    onChange={() => handleCheckboxChange5(checkbox5.id)}
                />
                <label htmlFor={checkbox5.id}>{checkbox5.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown5(checkbox5.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns5[checkbox5.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox5"
                                checked={checkboxDropdowns5.surgeonCheckbox5}
                                onChange={() => handleCheckboxChange5('surgeonCheckbox5')}
                            />
                            <label htmlFor="surgeonCheckbox5"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox5"
                                checked={checkboxDropdowns5.oncologistCheckbox5}
                                onChange={() => handleCheckboxChange5('oncologistCheckbox5')}
                            />
                            <label htmlFor="oncologistCheckbox5"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox5"
                                checked={checkboxDropdowns5.anesthesiologistCheckbox5}
                                onChange={() => handleCheckboxChange5('anesthesiologistCheckbox5')}
                            />
                            <label htmlFor="anesthesiologistCheckbox5"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
        
        {/* treatement thirdbox*/}
        {checkboxes.map((checkbox6, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox6.id === 'vehicle7' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox6.id}
                    name={checkbox6.id}
                    value={checkbox6.label}
                    checked={
                        checkboxDropdowns6.surgeonCheckbox6 &&
                        checkboxDropdowns6.oncologistCheckbox6 &&
                        checkboxDropdowns6.anesthesiologistCheckbox6
                    }
                    onChange={() => handleCheckboxChange6(checkbox6.id)}
                />
                <label htmlFor={checkbox6.id}>{checkbox6.label}</label>
                <label className="checkbox_price">
                    <p>$2147</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown6(checkbox6.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns6[checkbox6.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox6"
                                checked={checkboxDropdowns6.surgeonCheckbox6}
                                onChange={() => handleCheckboxChange6('surgeonCheckbox6')}
                            />
                            <label htmlFor="surgeonCheckbox6"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox6"
                                checked={checkboxDropdowns6.oncologistCheckbox6}
                                onChange={() => handleCheckboxChange6('oncologistCheckbox6')}
                            />
                            <label htmlFor="oncologistCheckbox6"> Medical Oncologist <span className='price'>$600</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox6"
                                checked={checkboxDropdowns6.anesthesiologistCheckbox6}
                                onChange={() => handleCheckboxChange6('anesthesiologistCheckbox6')}
                            />
                            <label htmlFor="anesthesiologistCheckbox6"> Anesthesiologist <span className='price'>$800</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}

        {/* treatement forthbox */}
        {checkboxes.map((checkbox7, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox7.id === 'vehicle8' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox7.id}
                    name={checkbox7.id}
                    value={checkbox7.label}
                    checked={
                        checkboxDropdowns7.surgeonCheckbox7 &&
                        checkboxDropdowns7.oncologistCheckbox7 &&
                        checkboxDropdowns7.anesthesiologistCheckbox7
                    }
                    onChange={() => handleCheckboxChange7(checkbox7.id)}
                />
                <label htmlFor={checkbox7.id}>{checkbox7.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown7(checkbox7.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns7[checkbox7.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox7"
                                checked={checkboxDropdowns7.surgeonCheckbox7}
                                onChange={() => handleCheckboxChange7('surgeonCheckbox7')}
                            />
                            <label htmlFor="surgeonCheckbox7"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox7"
                                checked={checkboxDropdowns7.oncologistCheckbox7}
                                onChange={() => handleCheckboxChange7('oncologistCheckbox7')}
                            />
                            <label htmlFor="oncologistCheckbox7"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox7"
                                checked={checkboxDropdowns7.anesthesiologistCheckbox7}
                                onChange={() => handleCheckboxChange7('anesthesiologistCheckbox7')}
                            />
                            <label htmlFor="anesthesiologistCheckbox7"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
           <div id="surveillanceSection">
              <p className="checkbox-heading">SURVEILLANCE</p>
           </div>

            {/* SURVEILLANCE firstbox*/}
            {checkboxes.map((checkbox8, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox8.id === 'vehicle9' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox8.id}
                    name={checkbox8.id}
                    value={checkbox8.label}
                    checked={
                        checkboxDropdowns8.surgeonCheckbox8 &&
                        checkboxDropdowns8.oncologistCheckbox8 &&
                        checkboxDropdowns8.anesthesiologistCheckbox8
                    }
                    onChange={() => handleCheckboxChange8(checkbox8.id)}
                />
                <label htmlFor={checkbox8.id}>{checkbox8.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown8(checkbox8.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns8[checkbox8.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox8"
                                checked={checkboxDropdowns8.surgeonCheckbox8}
                                onChange={() => handleCheckboxChange8('surgeonCheckbox8')}
                            />
                            <label htmlFor="surgeonCheckbox8"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox8"
                                checked={checkboxDropdowns8.oncologistCheckbox8}
                                onChange={() => handleCheckboxChange8('oncologistCheckbox8')}
                            />
                            <label htmlFor="oncologistCheckbox8"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox8"
                                checked={checkboxDropdowns8.anesthesiologistCheckbox8}
                                onChange={() => handleCheckboxChange8('anesthesiologistCheckbox8')}
                            />
                            <label htmlFor="anesthesiologistCheckbox8"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}

            {/* SURVEILLANCE  secondbox*/}
             {checkboxes.map((checkbox9, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox9.id === 'vehicle10' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox9.id}
                    name={checkbox9.id}
                    value={checkbox9.label}
                    checked={
                        checkboxDropdowns9.surgeonCheckbox9 &&
                        checkboxDropdowns9.oncologistCheckbox9 &&
                        checkboxDropdowns9.anesthesiologistCheckbox9
                    }
                    onChange={() => handleCheckboxChange9(checkbox9.id)}
                />
                <label htmlFor={checkbox9.id}>{checkbox9.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown9(checkbox9.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns9[checkbox9.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox9"
                                checked={checkboxDropdowns9.surgeonCheckbox9}
                                onChange={() => handleCheckboxChange9('surgeonCheckbox9')}
                            />
                            <label htmlFor="surgeonCheckbox9"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox9"
                                checked={checkboxDropdowns9.oncologistCheckbox9}
                                onChange={() => handleCheckboxChange9('oncologistCheckbox9')}
                            />
                            <label htmlFor="oncologistCheckbox9"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox9"
                                checked={checkboxDropdowns9.anesthesiologistCheckbox9}
                                onChange={() => handleCheckboxChange9('anesthesiologistCheckbox9')}
                            />
                            <label htmlFor="anesthesiologistCheckbox9"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
        
        {/* SURVEILLANCE  thirdbox*/}
        {checkboxes.map((checkbox10, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox10.id === 'vehicle11' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox10.id}
                    name={checkbox10.id}
                    value={checkbox10.label}
                    checked={
                        checkboxDropdowns10.surgeonCheckbox10 &&
                        checkboxDropdowns10.oncologistCheckbox10 &&
                        checkboxDropdowns10.anesthesiologistCheckbox10
                    }
                    onChange={() => handleCheckboxChange10(checkbox10.id)}
                />
                <label htmlFor={checkbox10.id}>{checkbox10.label}</label>
                <label className="checkbox_price">
                    <p>$2147</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown10(checkbox10.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns10[checkbox10.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox10"
                                checked={checkboxDropdowns10.surgeonCheckbox10}
                                onChange={() => handleCheckboxChange10('surgeonCheckbox10')}
                            />
                            <label htmlFor="surgeonCheckbox10"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox10"
                                checked={checkboxDropdowns10.oncologistCheckbox10}
                                onChange={() => handleCheckboxChange10('oncologistCheckbox10')}
                            />
                            <label htmlFor="oncologistCheckbox10"> Medical Oncologist <span className='price'>$600</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox10"
                                checked={checkboxDropdowns10.anesthesiologistCheckbox10}
                                onChange={() => handleCheckboxChange10('anesthesiologistCheckbox10')}
                            />
                            <label htmlFor="anesthesiologistCheckbox10"> Anesthesiologist <span className='price'>$800</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}

      {/* SURVEILLANCE  forthbox*/}
        {checkboxes.map((checkbox11, index) => (
            <div key={index} className='checkbox_button'>
            {checkbox11.id === 'vehicle12' && (
             <>
                <input
                    type="checkbox"
                    id={checkbox11.id}
                    name={checkbox11.id}
                    value={checkbox11.label}
                    checked={
                        checkboxDropdowns11.surgeonCheckbox11 &&
                        checkboxDropdowns11.oncologistCheckbox11 &&
                        checkboxDropdowns11.anesthesiologistCheckbox11
                    }
                    onChange={() => handleCheckboxChange11(checkbox11.id)}
                />
                <label htmlFor={checkbox11.id}>{checkbox11.label}</label>
                <label className="checkbox_price">
                    <p>$1547</p>
                    <div
                        className="dropdown-icon"
                        onClick={() =>toggleDropdown11(checkbox11.id)}
                    >
                        <p>
                            <i className="arrow down"></i>
                        </p>
                    </div>
                </label>
                {checkboxDropdowns11[checkbox11.id] && (
                    <div className='dropdown-content dropdown-border'>
                        <div className='dropdown-text'>
                            {/* Checkbox content for Specialist office visits */}
                            <input
                                type="checkbox"
                                id="surgeonCheckbox11"
                                checked={checkboxDropdowns11.surgeonCheckbox11}
                                onChange={() => handleCheckboxChange11('surgeonCheckbox11')}
                            />
                            <label htmlFor="surgeonCheckbox11"> Surgeon <span className='price'>$747</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="oncologistCheckbox11"
                                checked={checkboxDropdowns11.oncologistCheckbox11}
                                onChange={() => handleCheckboxChange11('oncologistCheckbox11')}
                            />
                            <label htmlFor="oncologistCheckbox11"> Medical Oncologist <span className='price'>$500</span></label>
                        </div>
                        <div className='dropdown-text'>
                            <input
                                type="checkbox"
                                id="anesthesiologistCheckbox11"
                                checked={checkboxDropdowns11.anesthesiologistCheckbox11}
                                onChange={() => handleCheckboxChange11('anesthesiologistCheckbox11')}
                            />
                            <label htmlFor="anesthesiologistCheckbox11"> Anesthesiologist <span className='price'>$300</span></label>
                        </div>
                    </div>
                )}
            </>
          )}
         </div>
        ))}
        </div> 
               
        {data && (
            <div>
                <p>{JSON.stringify(data)}</p>
            </div>
        )}
    </div>
);

};

export default ApiData;
