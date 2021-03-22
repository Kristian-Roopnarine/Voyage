import pandas as pd
import json 
COUNTRY_FILE_NAME='country_data.csv'
CITY_FILE_NAME='cleaned_cities.csv'
OUTPUT_FILE='city_data.ts'
# country will be replaced by foreign key
OUTPUT_COLUMNS=['iso2','iso3','city','state_name','state_id','id','lat','lng','country']

# get country data
country_df = pd.read_csv(COUNTRY_FILE_NAME)
# create python dictionary of countries with {<name>:<id>}

country_lookup = {}

for index,row in country_df.iterrows():
    country_lookup[row['name']] = row['id']

#create city df
city_df = pd.read_csv(CITY_FILE_NAME)
city_df = city_df[OUTPUT_COLUMNS]

output_data = []
for index,row in city_df.iterrows():
    country_name = row['country']
    row['country'] = country_lookup[country_name]
    data = {}
    data['iso2'] = row['iso2']
    data['iso3'] = row['iso3']
    data['city_id'] = row['id']
    data['name'] = row['city']
    data['lat'] = row['lat']
    data['lng'] = row['lng']
    data['country'] = row['country']
    if row['state_name'] == '':
        data['state_name'] = NULL
        data['state_id'] = NULL
    output_data.append(data)

interface = """
    export interface CityData {
        iso2:string;
        iso3:string;
        city:string;
        lat:number;
        lng:number;
        country:string;
        city_id:number;
        state_name?:string;
        state_id?:string;
    }
    """

with open(OUTPUT_FILE,'w') as f:
    json_list =json.dumps(output_data)
    js_contents = f"""
    {interface}
    export const cityData:CityData[] = {json_list}"""
    f.write(js_contents)

