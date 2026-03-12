function plusOne(digits: number[]): number[] {
   let stringDigits = '' 
   for (let i = 0; i < digits.length; i++) { 
        stringDigits += String(digits[i]); 
    } 
    const increment = String(BigInt(stringDigits) + 1n); 
    return increment.split('').map(Number);
};