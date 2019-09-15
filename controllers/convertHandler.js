/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var units = ['gal','l','lbs','kg','mi','km']; // lowercase
  var unitsByLength = [...units].sort((a,b)=>{
    return b.length-a.length;
  });
  var unitsConfig = {
    gal:'gallons',
    l:'liters',
    lbs:'pounds',
    kg:'kilograms',
    mi:'miles',
    km:'kilometers'
  }
  
  this.getNum = function(input) {
    var result = input.match(/([0-9./]+)/g); // >>2.5/6<<km
    if(result==null) result='1'; // fallback = 1
    else result = result[0];
    if(result.split('/').length>2) return 'invalid number';
    result = eval(result); // 0.5 = 1/2
    return result;
  };
  
  this.getUnit = function(input) {
    var result, hit=false;

    for(let i=0; i<unitsByLength.length; i++) {
      var pos = input.toLowerCase().indexOf(unitsByLength[i]);
      if(pos>-1) {
        hit=unitsByLength[i];
        break;
      }
     }
    if(hit) {
      if(input.toLowerCase().substr(input.toLowerCase().indexOf(hit))!==hit) return 'invalid unit';
      return input.substr(input.toLowerCase().indexOf(hit));
    } 
    return 'invalid unit';
  };

  
  this.getReturnUnit = function(initUnit) {
    var result;
    if(initUnit=="invalid unit") return null;
    
    var i = units.indexOf(initUnit.toLowerCase());
    // returnUnitIndex = initUnitIndex + diff
    // diff = i%2 *(-2) +1
    // 0|1 *-2 => 0|-2 => +1 => +1|-1 
    i = i + i%2 *(-2) +1;
    return units[i];
  };

  this.spellOutUnit = function(unit) {
    if(!unit) return 'invalid unit';
    return unitsConfig[unit];    
  };
  
 
  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result, f;
    switch(initUnit) {
        case 'gal':
          f = galToL;
          break;
      case 'l':
          f = 1/galToL;
          break;
       case'lbs':
          f = lbsToKg;
          break;
       case 'kg':
          f = 1/lbsToKg;
          break;
       case 'mi':
          f = miToKm;
          break;
       case 'km':
          f = 1/miToKm;
          break;
    }
    if(f==undefined) console.log('Error: undefined unit');
    result = f*initNum;
    return result;
  };
  
  
  // {initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {
      'initNum': initNum,
      'initUnit': initUnit,
      'returnNum': returnNum,
      'returnUnit': returnUnit,
      'string': initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)
    };
    
    return result;
  };
  
}

module.exports = ConvertHandler;
