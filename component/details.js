const get = (req,res) =>{
    res.send([
    {
        'name':'sahil',
        'title':'Goa: Congress averts split for now as MLA Michael Lobo meets Mukul Wasnik',
        'img':'https://images.indianexpress.com/2022/07/michael-lobo.png'
    },
    {
        'name':'sushant',
        'title':'NTA NEET-UG 2022 Admit Card LIVE Updates: NEET hall ticket released at neet.nta.nic.in',
        'img':'https://images.indianexpress.com/2022/07/NEET-UG-2022-Admit-Card.jpg'
    },
    {
        'name':'atharva',
        'title':'Coronavirus India News Live Updates: India reports 13,615 fresh cases, 20 deaths; slight dip since yesterday',
        'img':'https://images.indianexpress.com/2022/07/Covid-live-1.jpg'
    },
    {
        'name':'devansh',
        'title':'Shinzo Abe Funeral Live Updates: Motorcade carrying former Japan PM’s body leave Tokyo temple',
        'img':'https://images.indianexpress.com/2022/07/body-funeral.jpg'
    }
])
}

module.exports.details = get;