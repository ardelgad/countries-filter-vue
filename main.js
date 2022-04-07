// Suerte :)

Vue.createApp({
    data() {
        return {
            countries: [],
            countryFilter: '',
            regionFilter:''
        }
    },

    created() {
        this.fetchData();
    },

    computed: {
        getFilteredCountries() {

            let countries = this.countries;

            if (this.countryFilter) {
                // TODO: return this.countries.filter(...)
                countries = this.countries.filter(country => country.name.includes(this.countryFilter));

                return search;
            }

            if (this.regionFilter && this.regionFilter != 'all') {
                console.log('filter region:' + this.regionFilter)
                const reg = new RegExp(`${this.regionFilter}`, 'i')
                countries = countries.filter(country => country.region.match(reg))
            }
            return this.countries;
        }
    },

    methods: {
        async fetchData() {
            const response = await fetch("https://restcountries.com/v2/all");
            this.countries = await response.json();
        },        
    },
}).mount("#app")