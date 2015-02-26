# api-server

API Endpoint for Traffic Data

GET /route

DESCRIPTION:
A single phrase/sentence description of what the route retrieves.

SPECS:
One criterion it should meet
Another criterion it should meet

EXAMPLES:
GET /route (an example usage; list more if necessary) - Description of what it does

__________________________________________________________________________


GET /incidents

DESCRIPTION:
The default route.  Retrieves the most recent 1000 incidents.

SPECS:
DB query orders by date DESC and limits the results to 1000
Returns those 1000 results
URL may contain one or more of the following query parameters:
limit: Limit results up to this number (1000 is the default).
from: Fetch incidents beginning from this date.  Note: There may be a from query param without specifying a to.  Date should be ISO 8601 formatted (see the Formats section here: http://www.w3.org/TR/NOTE-datetime)
to: Fetch incidents up to this date. Date should be ISO 8601 formatted date (see the Formats section here: http://www.w3.org/TR/NOTE-datetime)
from: Fetch incidents beginning from this date.  Should be in a unix timestamp format.
to: Fetch incidents up to this date.  Should be in a unix timestamp format.
location-type: Location type as defined by GET /location-types
area: Area as defined by GET /areas
type: Incident type as defined by GET /types

EXAMPLES:
GET /incidents?area=kaneohe&location-type=intersection - Fetch all incidents that happened at intersections in Kaneohe (limit 1000).

GET /incidents?from=2014-10-31T23:59:59Z - Fetch all incidents that happened since 10/31/2014 11:59:59PM.

GET /incidents?from=2014-10-31T23:59:59Z&to=2015-01-01T00:00:00Z - Fetch all incidents that happened between 10/31/2014 11:59:59PM and 1/1/2015 12:00:00AM.

__________________________________________________________________________

DESKTOP SH!7 below
GET /incidents/
GET /incidents/

DESCRIPTION:
Retrieves all motor vehicle incidents in past 2 years.

SPECS:
Returns all motor vehicle incidents in 2 years.

EXAMPLES:
http://localhost:3000/api/incidents/

__________________________________________________________________________


GET /incidents/latest

DESCRIPTION:
Get all incidents that occurred in the last 4 hours.

SPECS:
Returns all incidents ordered by date/time descending that occurred in the last 4 hours.

EXAMPLES:
http://localhost:3000/api/incidents/latest

__________________________________________________________________________


GET /location-types

DESCRIPTION:
Fetches all location types.

SPECS:
This should just return an array, i.e. [‘street’, ‘intersection’, ‘highway’].
The array should contain unique values.

EXAMPLES:
Example

__________________________________________________________________________



GET /areas

DESCRIPTION:
Fetches all areas in the database.

SPECS:
This should just return an array, i.e. [‘HONOLULU’, ‘KANEOHE’, ‘PEARL CITY’].
The array should contain unique values, i.e., don’t list ‘Honolulu’ twice.

ROUTES: (Completed)
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

ROUTES: (NOT Complete)
null (not complete)
id: 1 digit increment off


__________________________________________________________________________


GET /types

DESCRIPTION:
Fetches all incident types.

SPECS:
This should just return an array, i.e. [‘MOTOR VEHICLE COLLISION’, ‘HAZARDOUS DRIVER’, ‘STALLED/HAZARDOUS VEHICLE’, ‘TRAFFIC INCIDENT - NO COLLISION’, ‘TRAFFIC NUISANCE OR PARKING VIOLATION’].
The array should contain unique values.

ROUTES: (Completed)
http://localhost:3000/api/type/stalled
http://localhost:3000/api/type/no-collision
http://localhost:3000/api/type/nuisance-violation
http://localhost:3000/api/type/collision
http://localhost:3000/api/type/hazardous

ROUTES: (NOT Complete)
id: 1 digit increment off
__________________________________________________________________________








