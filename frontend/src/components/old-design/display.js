import React, { useEffect, useState } from 'react';
import Navbarr from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import './fonts/fonts.css';
import  './display.css';
import WPage from './components/WelcomePage/WPage';


function Display() {
    // console.log('app..js');
    // Initialize state to hold fetched data
    const [data, setData] = useState([]);
    const [showWPage, setShowWPage] = useState(true);

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        // Define async function to fetch records
        const fetchRecords = async () => {
            try {
                // Fetch data from the server
                // const response = await fetch('https://tinker-backend-bbjncdnbpby9.deno.dev/records');  
                const response = await fetch('https://app-api.tinkerhub.org/checkin/active');


                // Throw an error if the response is not ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the response as JSON
                const records = await response.json();
                // Update state with fetched records
                setData(records);
            } catch (error) {
                // Log any errors to the console
                console.error('Fetch failed:', error);
            }
        };

        // Fetch records immediately
        fetchRecords();

        // // Fetch records every 20 seconds
        // const interval = setInterval(fetchRecords, 20000);
        
        // Fetch records every 1 minute (60 seconds)
        const interval = setInterval(fetchRecords, 60000);


        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWPage(false);
        }, 6500); // Show <WPage /> for 30 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='tailwind-scope' style={{ fontFamily: 'ClashDisplay' }}>
            {showWPage ? (
                <WPage />
            ) : (
                <>
                    <Navbarr />
                    <Cards data={data} />
                </>
            )}

        </div>
    );
}

export default Display;

