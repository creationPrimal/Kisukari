
const reminderssplide = new Splide( '#reminders-splide', {
    perPage: 5,
    gap : '1.8rem',
    drag : 'free',
    perMove: 1,
    padding: '0px 10px',
    snap: true,
    type: 'loop',
    pagination: true,
    autoplay: true,
    arrows: false,
    breakpoints: {
      1199: {
        perPage: 4,
        gap : '10px',
        padding: { left: 0, right: 50 },
      },
      991: {
        perPage: 3,
        padding: { left: 0, right: 20 },
      },
      764: {
        perPage: 2,
        padding: { left: 0, right: 80 },
      },
      575: {
        perPage: 2,
        padding: { left: 0, right: 80 },
      },
      515: {
        perPage: 2,
        padding: { left: 0, right: 40 },
      },
       480: {
        perPage: 2,
        padding: { left: 0, right: 25 },
      },
      450: {
      perPage: 2,
      padding: { left: 0, right: 0 },
      
      },
      428: {
        perPage: 2,
        padding: { left: 0, right: 35 },
        
        },
        396: {
            perPage: 2,
            padding: { left: 0, right: 0 },
        },
        365: {
            perPage: 1,
            padding: { left: 0, right: 150 },
        },
        335: {
            perPage: 1,
            padding: { left: 0, right: 110 },
        },
        305: {
            perPage: 1,
            padding: { left: 0, right: 100 },
        },
        290: {
            perPage: 1,
            padding: { left: 0, right: 60 },
        },
        260: {
            perPage: 1,
            padding: { left: 0, right: 0 },
        },
    },
    } );
    reminderssplide.mount()