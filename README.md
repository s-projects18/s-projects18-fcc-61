# Metric-Imperial Converter

A Information Security and Quality Assurance Project, part of Free Code Camp's curriculum

## Description
API for converting numerical values/units in other units.

Allowed Units: 
- gal: gallons
- l: liters
- lbs: pounds
- kg: kilograms
- mi: miles
- km: kilometers

## Usage
- /api/convert?input=4gal
- /api/convert?input=1/2km

A *JSON-object* is returned, e.g.:

    {
      initNum: 3.1,
      initUnit: 'mi',
      returnNum: 5.0000008,
      returnUnit: 'km',
      string: '3.1 miles converts to 5.00002 kilometers'
    }
 
=======
# s-projects18-fcc-61
...
