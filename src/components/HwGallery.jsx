import React from 'react'

export default function HwGallery() {
    const [index, setIndex] = React.useState(0);
    const images = [
        'https://source.unsplash.com/random/800x800?snowboard',
        'https://source.unsplash.com/random/800x800?surfing',
        'https://source.unsplash.com/random/800x800?mountain',
        'https://source.unsplash.com/random/800x800?camping',
        'https://source.unsplash.com/random/800x800?hiking'
    ];
    const addOne = () => {
        if (index >= 4) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
        console.log(index);
    }
    const reduceOne = () => {
        if (index <= 0) {
            setIndex(4);
            return;
        }
        setIndex(index - 1);
        console.log(index);
    }
    return (
        <div className='text-center w-50'>
            <h3>Gallery</h3>
            <img src={images[index]} alt="sports" width={"40%"} />
            <div>
                <button style={{width:"15%"}} onClick={reduceOne} >Back</button>
                <button style={{width:'15%'}} onClick={addOne}>Next</button>
            </div>
        </div>
    )
}
