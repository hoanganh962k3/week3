function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price;
  
    // Calculate total cash in drawer
    let totalCid = cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2);
  
    // Check if total cash in drawer is less than change due
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Check if total cash in drawer is exactly equal to change due
    if (totalCid == changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    // Create the change array, in reverse order of denominations
    let changeArray = [];
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const [unitName, unitValue] = currencyUnits[i];
      let cidValue = cid[i][1];
      let amount = 0;
  
      // While we need more change and there is currency of this denomination available
      while (changeDue >= unitValue && cidValue > 0) {
        changeDue -= unitValue;
        changeDue = changeDue.toFixed(2); // Avoid floating-point precision issues
        cidValue -= unitValue;
        amount += unitValue;
      }
  
      if (amount > 0) {
        changeArray.push([unitName, amount]);
      }
    }
  
    
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: changeArray };
  }
  