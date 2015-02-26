# api-server

* API Endpoint for Traffic Data

## GET /incidents

<d1>
<dt>DESCRIPTION:</dt>
<dd>The default route.</dd>

<dt>SPECS:</dt>
<dd>* URL may contain one or more of the following query parameters:</dd>
</d1>

from: Fetch incidents beginning from this date.  Should be in a unix timestamp format.
to: Fetch incidents up to this date.  Should be in a unix timestamp format.
area: Area as defined by GET /areas
type: Incident type as defined by GET /types

EXAMPLES:
GET /incidents?from=2014-10-31T23:59:59Z - Fetch all incidents that happened since 10/31/2014 11:59:59PM.

GET /incidents?from=2014-10-31T23:59:59Z&to=2015-01-01T00:00:00Z - Fetch all incidents that happened between 10/31/2014 11:59:59PM and 1/1/2015 12:00:00AM.

__________________________________________________________________________
## GET /incidents/

<d1>
<dt>DESCRIPTION:</dt>
<dd>Retrieves all motor vehicle incidents in past 2 years.</dd>

<dt>SPECS:</dt>
<dd>Returns all motor vehicle incidents in 2 years.</dd>

<dt>EXAMPLES:</dt>
<dd>http://localhost:3000/api/incidents/</dd>
</d1>
__________________________________________________________________________
## GET /incidents/latest

DESCRIPTION:
Get all incidents that occurred in the last 4 hours.

SPECS:
Returns all incidents ordered by date/time descending that occurred in the last 4 hours.

EXAMPLES:
http://localhost:3000/api/incidents/latest
__________________________________________________________________________
## GET /areas

DESCRIPTION:
Fetches all areas in the database.

SPECS:
This should just return an array, i.e. [‘HONOLULU’, ‘KANEOHE’, ‘PEARL CITY’].
The array should contain unique values, i.e., don’t list ‘Honolulu’ twice.

ROUTES:
http://localhost:3000/api/area/kakaako
http://localhost:3000/api/area/kailua
http://localhost:3000/api/area/pearl-city
http://localhost:3000/api/area/pearl-hbr
http://localhost:3000/api/area/kaneohe
http://localhost:3000/api/area/aiea
http://localhost:3000/api/area/maili
http://localhost:3000/api/area/nuuanu
http://localhost:3000/api/area/honolulu
http://localhost:3000/api/area/kaimuki
http://localhost:3000/api/area/kalihi
http://localhost:3000/api/area/kalaeloa
http://localhost:3000/api/area/airport
http://localhost:3000/api/area/hawaii-kai
__________________________________________________________________________
## GET /types

DESCRIPTION:
Fetches all incident types.

SPECS:
This should just return an array, i.e. [‘MOTOR VEHICLE COLLISION’, ‘HAZARDOUS DRIVER’, ‘STALLED/HAZARDOUS VEHICLE’, ‘TRAFFIC INCIDENT - NO COLLISION’, ‘TRAFFIC NUISANCE OR PARKING VIOLATION’].
The array should contain unique values.


ROUTES: 
[localhost:3000](http://localhost:3000/api/type/stalled)[stalled link]
[localhost:3000](http://localhost:3000/api/type/no-collision)
[localhost:3000](http://localhost:3000/api/type/nuisance-violation)
[localhost:3000](http://localhost:3000/api/type/collision)
[localhost:3000](http://localhost:3000/api/type/hazardous)

__________________________________________________________________________








