function calculateNetSalary(basicSalary, benefits) {
    // Assume tax rate, NHIF, and NSSFDeductions for demonstration purposes
    const taxRate = 0.2;
    const nhifDeductions = 2000;
    const nssfDeductions = 1500;

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}

const userBasicSalary = parseFloat(prompt('Enter basic salary:'));
const userBenefits = parseFloat(prompt('Enter additional benefits:'));
if (isNaN(userBasicSalary) || isNaN(userBenefits) || userBasicSalary < 0 || userBenefits < 0) {
    console.log('Invalid input. Please enter valid positive numbers.');
} else {
    calculateNetSalary(userBasicSalary, userBenefits);
}
