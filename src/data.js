import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
    {id: 1, href:'https://www.twitter.com', icon: 'fab fa-facebook'},
    {id: 1, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 1, href:'https://www.twitter.com', icon: 'fab fa-squarespace'},
]

export const services = [ 
    {id:1, icon: 'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'},
    {id:2, icon: 'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'},
    {id:3, icon: 'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'},
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'China',
        duration: 6,
        cost: 2100,
    
    },
    {
        id: 2,
        image: tour2,
        date: 'october 1th, 2020',
        title: 'Samolet Adventure',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'China',
        duration: 11,
        cost: 1100,
    
    },
    {
        id: 3,
        image: tour3,
        date: 'september 1th, 2027',
        title: 'Kaspichan Adventure',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Bulgaria',
        duration: 3,
        cost: 130,
    
    },
    
    {
        id: 4,
        image: tour4,
        date: 'october 58th, 2320',
        title: 'Kapitanovci Adventure',
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location: 'Bulgaria',
        duration: 122,
        cost: 11340,
    
    },

]