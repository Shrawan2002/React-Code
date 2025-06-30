import React from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className=""
}) {
    

    return (
        <div className ={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
        <div className="w-1/2">
        <label className='text-black/40 mb-2 inline-block'>
            {label}
        </label>
        <input 
        className='outline-none w-full bg-transparent py-1.5'
        type="number" 
        placeholder='Amount'
        disabled = {amountDisable}
        value={amount}
        onClick={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
         id="" />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer
        outline-none'
        value={selectCurrency}
        >
            <option value="usd"
        </select>
        </div>
        </div>
    )
}
