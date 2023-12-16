import { Button, Grid, Stack, Typography } from '@mui/material';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';
import { firestore } from '../Firebase';
import styles from '../styles/Reservation.module.css';

const ALL_TIMES = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']
const TABLES = 10;

export default function Reservation() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {

        const updateAvail = async () => {

            try {

                const formattedDate = date.toISOString().split('T')[0];
                const reservationsRef = collection(firestore, `reservations`);

                const querySnapshot = await getDocs(query(reservationsRef, where('date', '==', formattedDate)))

                let timeCounts = {};
                querySnapshot.docs.forEach(doc => {
                    const time = doc.data().time;
                    timeCounts[time] = timeCounts[time] ? timeCounts[time] + 1 : 1;
                });

                const available = ALL_TIMES.filter(time => !timeCounts[time] || timeCounts[time] < TABLES);

                setAvailableTimes(available);

            } catch {
                toast('Error fetching reservations', {
                    type: 'error'
                });
            }
        }

        updateAvail();

    }, [date]);

    const handleDateChange = newDate => {
        setDate(newDate);
        setSelectedTime(null);
    };

    const handleTimeSelection = time => {
        setSelectedTime(time);
    };

    const handleReservation = async (event) => {

        event.preventDefault();

        if (!selectedTime) {
            toast('Please select a time for your reservation!', {
                type: 'error'
            });

            return;
        }

        const formattedDate = date.toISOString().split('T')[0];
        const reservationsRef = collection(firestore, 'reservations');

        try {

            await addDoc(reservationsRef, {
                name: name,
                phone: phone,
                date: formattedDate,
                time: selectedTime,
            })

            toast("We got your reservation, see you soon!");

            setName("");
            setPhone("");
            setSelectedTime(null);

        } catch {
            toast('Error adding reservation', {
                type: 'error'
            });
        }
    };


    return (
        <Stack spacing={10} alignItems='center'>

            <h1 className={styles.title}>Table Reservation</h1>

            <Stack direction='row' spacing={10} width='100%' justifyContent='center'>

                <Stack width='30%' alignItems='flex-end'>
                    <Calendar onChange={handleDateChange} value={date} />
                </Stack>

                <Stack width='30%' alignItems='center' spacing={1}>
                    <h1 className={styles.formTitle}>Available Times:</h1>
                    <Grid container spacing={2}>
                        {availableTimes.map(time => (
                            <Grid item key={time}>
                                <Button
                                    variant='contained'
                                    color={selectedTime === time ? 'secondary' : 'primary'}
                                    onClick={() => handleTimeSelection(time)}>

                                    {time}

                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

            </Stack>

            <Stack alignItems='center' className={styles.formContainer} width='25vw'>
                <h1 className={styles.formTitle}>Your Reservation</h1>
                <form onSubmit={handleReservation}>
                    <Stack spacing={2} alignItems='center'>

                        <Typography variant='p' className={styles.formText}>
                            Selected Date: {date.toDateString()}
                        </Typography>

                        <Typography variant='p' className={styles.formText}>
                            Selected Time: {selectedTime || 'Please select a time'}
                        </Typography>

                        <input
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />

                        <input
                            name="phone"
                            placeholder="Phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />

                        <button type="submit"> Make Reservation </button>
                    </Stack>
                </form>
            </Stack>

            <spacing />

        </Stack >
    );
};