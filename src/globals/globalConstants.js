import Library1 from './../assets/images/library-interior-877971.jpg'
import Library2 from './../assets/images/woman-in-black-long-sleeved-looking-for-books-in-library-926680.jpg'
import Library3 from './../assets/images/row-of-books-in-shelf-256541.jpg'
import Library4 from './../assets/images/chair-beside-book-shelves-2041540.jpg'

import IncomeTaxRules from './../assets/images/51y75vogi-L._SX327_BO1,204,203,200_.jpg'
import CentralExcise from './../assets/images/41OA95EgcVL._SX353_BO1,204,203,200_.jpg'
import Audit from './../assets/images/51ueVKiWbDL._SX327_BO1,204,203,200_.jpg'

import Nature1 from './../assets/images/black-and-white-mountain-over-yellow-white-and-blue-sky-46253.jpg'
import Nature2 from './../assets/images/abandoned-forest-industry-nature-34950.jpg'
import Nature3 from './../assets/images/grand-canyon-673020.jpg'

export let navLinks = [
    {
        id : 'bookstore_home',
        title : 'Bookstore Home',
        isMain : true,
        childLinks : []
    },
    {
        id : 'professional_books',
        title : 'Professional Books',
        isMain : false,
        childLinks : [
            { id : 'direct_tax_laws', title : 'Direct Tax Laws' },
            { id : 'international_taxation', title : 'International Taxation' },
            { id : 'indirect_tax_laws', title : 'Indirect Tax Laws' },
            { id : 'insolvency_and_bankruptcy_code', title : 'Insolvency and Bankruptcy Code' },
            { id : 'gst', title : 'GST' },
            { id : 'accounts_and_audit', title : 'Accounts and Audit' },
            { id : 'banking_and_insurance', title : 'Banking & Insurance' },
            { id : 'bare_acts', title : 'Bare Acts' }
        ]
    },
    {
        id : 'nism_iibf',
        title : 'NISM / IIBF',
        isMain : false,
        childLinks: []
    },
    {
        id : 'journals',
        title : 'Journals',
        isMain : false,
        childLinks : [
            { id : 'jkl', title : 'J K L' },
            { id : 'mno', title : 'M N O' },
        ]
    },
    {
        id : 'tax_compliance_on_dvd',
        title : 'Tax Compliance on DVD',
        isMain : false,
        childLinks : [
            { id : 'xyz', title : 'X Y Z' },
            { id : 'abc', title : 'A B C' },
        ]
    },
    {
        id : 'taxmann_online_on_dvd',
        title : 'Taxmann online on DVD',
        isMain : false,
        childLinks : []
    },
    {
        id : 'taxmann_online_on_web',
        title : 'Tax online on Web',
        isMain : false,
        childLinks : []
    },
    {
        id : 'e_services',
        title : 'E-Services',
        isMain : false,
        childLinks : []
    },
    {
        id : 'e_journals',
        title : 'E-Journals',
        isMain : false,
        childLinks : []
    },
    {
        id : 'e_books',
        title : 'E-Books',
        isMain : false,
        childLinks : []
    },
    {
        id : 'advanced_diploma_in_international_taxation',
        title : 'Advanced diploma in international taxation',
        isMain : false,
        childLinks : []
    },
]

export let navQuickLinks = [
    {
        id : 'bookmann_india',
        title : 'Bookmann India',
        isMain : true,
        childLinks : []
    },
    {
        id : 'authors',
        title : 'Authors',
        isMain : true,
        childLinks: []
    },
    {
        id : 'catalogue',
        title : 'Catalogue',
        isMain : false,
        childLinks: [
            { id : 'some', title : 'Some' },
            { id : 'dummy', title : 'Dummy' },
            { id : 'links', title : 'Links' },
        ]
    },
    {
        id : 'dealers',
        title : 'Dealers',
        isMain : true,
        childLinks: []
    },
]

export let offerListing = [
    {
        image : Library1,
        title : 'Super deal of lifetime',
        description : 'Get 2 modules at a price of 1 module.'
    },
    {
        image : Library2,
        title : 'Books under Rs 599 only',
        description : '5000+ books on Income Tax and Corporate Tax'
    },
    {
        image : Library3,
        title : 'Super deal of a lifetime',
        description : 'Get 2 modules at a price of 1 module.'
    },
    {
        image : Library4,
        title : 'Books under Rs 599 only',
        description : '5000+ books on Income Tax and Corporate Tax'
    }
]

export let userTags = [
    {id : 'recommended_for_you', title : 'Recommended For You'},
    {id : 'new_releases', title : 'New Releases'},
    {id : 'featured', title : 'Featured'},
    {id : 'latest', title : 'Latest'},
]

export let booksListing = [

    {
        id : 'dummy1',
        title : 'Income Tax Rules with Master Guide To Income Tax Rules',
        authors : ['Aditya Gadge', 'Biharilal Deora'],
        image : IncomeTaxRules,
        price : '345',
        rating : 4,
        specialTag : 'Best Seller',
        tags : [
            'recommended_for_you', 'new_releases', 'featured', 'latest',
            'e_services', 'e_books'
        ]
    },
    {
        id : 'dummy2',
        title : 'Central Excise Manual (Vol 2) (Set of 3 Books)',
        authors : ['Amitabha Mukherjee'],
        image : CentralExcise,
        price : '1,799',
        rating : 4,
        specialTag : null,
        tags : [
            'recommended_for_you', 'new_releases', 'featured', 'latest',
            'e_services', 'e_books'
        ]
    },
    {
        id : 'dummy3',
        title : 'GST Audit Manual with Annual Return',
        authors : ['S. N. Bidani', 'P. K. Mitra'],
        image : Audit,
        price : '1,200',
        rating : 2,
        specialTag : 'Limited Edition',
        tags : [
            'recommended_for_you', 'new_releases', 'featured', 'latest',
            'e_services', 'e_books'
        ]
    },
    {
        id : 'dummy4',
        title : 'GST Audit Manual with Annual Return - 2',
        authors : ['S. N. Bidani', 'P. K. Mitra'],
        image : Audit,
        price : '1,200',
        rating : null,
        specialTag : 'Limited Edition',
        tags : [
            'recommended_for_you', 'new_releases',
            'e_journals', 'e_books'
        ]
    },
    {
        id : 'dummy5',
        title : 'Income Tax Rules with Master Guide To Income Tax Rules - 2',
        authors : ['Aditya Gadge', 'Biharilal Deora'],
        image : IncomeTaxRules,
        price : '345',
        rating : 2,
        specialTag : 'Best Seller',
        tags : [
            'recommended_for_you', 'new_releases',
            'e_journals', 'e_books'
        ]
    },
    {
        id : 'dummy6',
        title : 'Central Excise Manual (Vol 2) (Set of 3 Books) - 2',
        authors : ['Amitabha Mukherjee'],
        image : CentralExcise,
        price : '1,799',
        rating : 3,
        specialTag : null,
        tags : [
            'recommended_for_you', 'new_releases',
            'e_journals', 'e_books'
        ]
    },

]

export let slides = [
    {
        id : 'xyz1',
        image : Nature1,
        heading : 'Subscription 2020',
        subHeading : 'Boost your Practice',
        text : 'An all encompassing, authentic and update platform'
    },
    {
        id : 'abc2',
        image : Nature2,
        heading : 'Subscription 2019',
        subHeading : 'Boost your Practice',
        text : 'Sed ut perspiciatis unde omni voluptatem accus antium'
    },
    {
        id : 'pqr3',
        image : Nature3,
        heading : 'Subscription 2018',
        subHeading : 'Boost your Practice',
        text : 'Msequi nesciunt. Neque porro quisquam est, qui dolorem ipsum'
    }
]