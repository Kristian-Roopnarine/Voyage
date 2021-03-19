import pandas as pd
import json

FILE_NAME="worldcities.csv"
OUTPUT_FILE="country_data.js"

city_data_df = pd.read_csv(FILE_NAME)

unique_country_list = city_data_df.country.unique().tolist()

# create a list of {"name":country_name} and save to javascriptfile 

output_data = []
for country in unique_country_list:
    data = {"name":country}
    output_data.append(data)

with open(OUTPUT_FILE,'w') as f:
    json_list = json.dumps(output_data)
    js_contents = f'const countryData = {json_list}'
    f.write(js_contents)
