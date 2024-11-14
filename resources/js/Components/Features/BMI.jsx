import { useState } from 'react';

const BMI = () => {
    const [weight,setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi,setBmi] = useState('')
    const [message,setMessage] = useState('')

    let findBMI = (e) =>{
        e.preventDefault()
        if(weight === 0 || height === 0){
            alert('Masukkan tinggi dan berat badan Anda')
        }
        else{
            let bmi = (weight/((height/100)*(height/100)))
            setBmi(bmi.toFixed(2))

            if(bmi<18.5){
                setMessage('Berat Kurang')
            }
            else if(bmi >=18.5 && bmi <22.9){
                setMessage('Berat Ideal')
            }
            else if(bmi >=23.0 && bmi <24.9){
                setMessage('Berat Berlebih')
            }
            else{
                setMessage('Obesitas')
            }
        }
    }

    let reload = () =>{
        window.location.reload()
    }

    return (
        <div>
            <div className='w-full min-h-screen flex content font-poppins'>
                <div className='relative w-1/2 flex flex-col bg-teal-50 p-24 pt-20'>
                    <p className='text-5xl font-bold'>Kalkulator BMI</p>
                    <p className='text-base py-1 w-[350px] mt-4'>Berat badan ideal adalah impian semua orang. Tidak hanya memiliki bentuk tubuh yang menunjang penampilan, berat badan ideal juga menandakan kondisi tubuh yang sehat. Bagaimana denganmu? Yuk, hitung sekarang di Kalkulator BMI!</p>
                </div>

                <div className='relative w-1/2 flex flex-col bg-teal-100'>
                    <form onSubmit={findBMI} className='p-24 pt-20 space-y-8'>

                        <div className='text-center'>
                            <p className='font-bold text-teal-700 text-xl'>Hitung BMI yuk!</p>
                            <p className='font-bold font-medium text-neutral-700 text-3xl mt-6'>{bmi}</p>
                            <p className='mt-2 text-neutral-700 font-bold text-2xl'>{message}</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium'>Tinggi Badan (cm)</label>
                            <input value={height} 
                            onChange={(e) => setHeight(e.target.value)} 
                            type="text" 
                            className='border outline-none py-2 px-2 rounded-md' 
                            placeholder='Masukkan tinggi badan Anda' />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className='font-medium'>Berat Badan (kg)</label>
                            <input value={weight} 
                            onChange={(e) => setWeight(e.target.value)} 
                            type="text" 
                            className='border outline-none py-2 px-2 rounded-md' 
                            placeholder='Masukkan berat badan Anda' />
                        </div>

                        <div className='flex cursor-pointer space-x-2'>
                            <input className='py-2 px-6 bg-teal-700 text-white rounded-full font-bold hover:bg-neutral-100 duration-300 hover:text-teal-500 cursor-pointer' type="submit" value="Hitung" />
                            <input onClick={reload} className='py-2 px-6 bg-teal-500 rounded-full text-white font-bold hover:bg-neutral-100 duration-300 hover:text-teal-500 cursor-pointer' type="submit" value="Ulang" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BMI;