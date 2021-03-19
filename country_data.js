const countryData = [
	{ name: 'Japan' },
	{ name: 'Indonesia' },
	{ name: 'India' },
	{ name: 'Philippines' },
	{ name: 'China' },
	{ name: 'Brazil' },
	{ name: 'Korea, South' },
	{ name: 'Mexico' },
	{ name: 'Egypt' },
	{ name: 'United States' },
	{ name: 'Russia' },
	{ name: 'Thailand' },
	{ name: 'Argentina' },
	{ name: 'Bangladesh' },
	{ name: 'Nigeria' },
	{ name: 'Turkey' },
	{ name: 'Pakistan' },
	{ name: 'Iran' },
	{ name: 'Congo (Kinshasa)' },
	{ name: 'Vietnam' },
	{ name: 'France' },
	{ name: 'United Kingdom' },
	{ name: 'Peru' },
	{ name: 'Colombia' },
	{ name: 'Angola' },
	{ name: 'Malaysia' },
	{ name: 'Hong Kong' },
	{ name: 'Sudan' },
	{ name: 'Chile' },
	{ name: 'Saudi Arabia' },
	{ name: 'Tanzania' },
	{ name: 'Iraq' },
	{ name: 'Singapore' },
	{ name: 'Kenya' },
	{ name: 'Burma' },
	{ name: 'Canada' },
	{ name: 'Australia' },
	{ name: 'C\u00f4te D\u2019Ivoire' },
	{ name: 'Spain' },
	{ name: 'South Africa' },
	{ name: 'Morocco' },
	{ name: 'Jordan' },
	{ name: 'Afghanistan' },
	{ name: 'Germany' },
	{ name: 'Algeria' },
	{ name: 'Bolivia' },
	{ name: 'Ethiopia' },
	{ name: 'Ukraine' },
	{ name: 'Yemen' },
	{ name: 'Italy' },
	{ name: 'Korea, North' },
	{ name: 'Taiwan' },
	{ name: 'Ecuador' },
	{ name: 'Madagascar' },
	{ name: 'Dominican Republic' },
	{ name: 'United Arab Emirates' },
	{ name: 'Guatemala' },
	{ name: 'Cameroon' },
	{ name: 'Uzbekistan' },
	{ name: 'Ghana' },
	{ name: 'Azerbaijan' },
	{ name: 'Cuba' },
	{ name: 'Cambodia' },
	{ name: 'Somalia' },
	{ name: 'Belarus' },
	{ name: 'Mali' },
	{ name: 'Venezuela' },
	{ name: 'Malawi' },
	{ name: 'Romania' },
	{ name: 'Paraguay' },
	{ name: 'Austria' },
	{ name: 'Syria' },
	{ name: 'Congo (Brazzaville)' },
	{ name: 'Kazakhstan' },
	{ name: 'Poland' },
	{ name: 'Hungary' },
	{ name: 'Zambia' },
	{ name: 'Guinea' },
	{ name: 'Uganda' },
	{ name: 'Burkina Faso' },
	{ name: 'Zimbabwe' },
	{ name: 'New Zealand' },
	{ name: 'Oman' },
	{ name: 'Netherlands' },
	{ name: 'Mongolia' },
	{ name: 'Serbia' },
	{ name: 'Bulgaria' },
	{ name: 'Czechia' },
	{ name: 'Uruguay' },
	{ name: 'Qatar' },
	{ name: 'Honduras' },
	{ name: 'Tunisia' },
	{ name: 'Mozambique' },
	{ name: 'Ireland' },
	{ name: 'Senegal' },
	{ name: 'Libya' },
	{ name: 'Georgia' },
	{ name: 'Chad' },
	{ name: 'Denmark' },
	{ name: 'Armenia' },
	{ name: 'Mauritania' },
	{ name: 'Kyrgyzstan' },
	{ name: 'Turkmenistan' },
	{ name: 'Niger' },
	{ name: 'Nicaragua' },
	{ name: 'Liberia' },
	{ name: 'Haiti' },
	{ name: 'Nepal' },
	{ name: 'Sweden' },
	{ name: 'Eritrea' },
	{ name: 'Sierra Leone' },
	{ name: 'Israel' },
	{ name: 'Panama' },
	{ name: 'Togo' },
	{ name: 'Gabon' },
	{ name: 'Croatia' },
	{ name: 'Tajikistan' },
	{ name: 'Benin' },
	{ name: 'Laos' },
	{ name: 'Sri Lanka' },
	{ name: 'Rwanda' },
	{ name: 'Central African Republic' },
	{ name: 'Latvia' },
	{ name: 'Norway' },
	{ name: 'Moldova' },
	{ name: 'Greece' },
	{ name: 'Burundi' },
	{ name: 'Finland' },
	{ name: 'Macedonia' },
	{ name: 'Kuwait' },
	{ name: 'Jamaica' },
	{ name: 'Lithuania' },
	{ name: 'El Salvador' },
	{ name: 'Djibouti' },
	{ name: 'Portugal' },
	{ name: 'Estonia' },
	{ name: 'Slovakia' },
	{ name: 'Albania' },
	{ name: 'Lebanon' },
	{ name: 'Guinea-Bissau' },
	{ name: 'South Sudan' },
	{ name: 'Papua New Guinea' },
	{ name: 'Lesotho' },
	{ name: 'Cyprus' },
	{ name: 'Namibia' },
	{ name: 'Costa Rica' },
	{ name: 'Slovenia' },
	{ name: 'Bosnia And Herzegovina' },
	{ name: 'Bahamas, The' },
	{ name: 'Botswana' },
	{ name: 'Suriname' },
	{ name: 'Timor-Leste' },
	{ name: 'Kosovo' },
	{ name: 'Guyana' },
	{ name: 'Equatorial Guinea' },
	{ name: 'Belgium' },
	{ name: 'Maldives' },
	{ name: 'Montenegro' },
	{ name: 'Bahrain' },
	{ name: 'Mauritius' },
	{ name: 'Switzerland' },
	{ name: 'Iceland' },
	{ name: 'Cabo Verde' },
	{ name: 'Luxembourg' },
	{ name: 'Barbados' },
	{ name: 'Comoros' },
	{ name: 'Bhutan' },
	{ name: 'Swaziland' },
	{ name: 'Solomon Islands' },
	{ name: 'Fiji' },
	{ name: 'Saint Lucia' },
	{ name: 'Sao Tome And Principe' },
	{ name: 'Vanuatu' },
	{ name: 'Brunei' },
	{ name: 'Monaco' },
	{ name: 'Trinidad And Tobago' },
	{ name: 'Samoa' },
	{ name: 'Liechtenstein' },
	{ name: 'Gambia, The' },
	{ name: 'Kiribati' },
	{ name: 'Seychelles' },
	{ name: 'Marshall Islands' },
	{ name: 'Saint Vincent And The Grenadines' },
	{ name: 'Tonga' },
	{ name: 'Antigua And Barbuda' },
	{ name: 'Andorra' },
	{ name: 'Belize' },
	{ name: 'Dominica' },
	{ name: 'Saint Kitts And Nevis' },
	{ name: 'American Samoa' },
	{ name: 'Malta' },
	{ name: 'Micronesia, Federated States Of' },
	{ name: 'Tuvalu' },
	{ name: 'Grenada' },
	{ name: 'San Marino' },
	{ name: 'West Bank' },
	{ name: 'Northern Mariana Islands' },
	{ name: 'Guam' },
	{ name: 'Palau' },
	{ name: 'Macau' },
	{ name: 'Puerto Rico' },
	{ name: 'Martinique' },
	{ name: 'Gibraltar' },
	{ name: 'Reunion' },
	{ name: 'Guadeloupe' },
	{ name: 'Cura\u00e7ao' },
	{ name: 'French Polynesia' },
	{ name: 'New Caledonia' },
	{ name: 'French Guiana' },
	{ name: 'Aruba' },
	{ name: 'Jersey' },
	{ name: 'Mayotte' },
	{ name: 'Greenland' },
	{ name: 'Faroe Islands' },
	{ name: 'Wallis And Futuna' },
	{ name: 'Saint Helena, Ascension, And Tristan Da Cunha' },
	{ name: 'Bermuda' },
	{ name: 'Cayman Islands' },
	{ name: 'Isle Of Man' },
	{ name: 'Turks And Caicos Islands' },
	{ name: 'Cook Islands' },
	{ name: 'Vatican City' },
	{ name: 'Falkland Islands (Islas Malvinas)' },
	{ name: 'South Georgia And South Sandwich Islands' },
];
