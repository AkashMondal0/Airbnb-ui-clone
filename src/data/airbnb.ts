import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md'
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

export const listings = [
    {
        "id": "123456",
        "title": "Ponta Delgada, Portugal",
        "description": "Welcome to our cozy apartment located in the heart of the city. It's perfect for couples or solo travelers looking for a comfortable stay.",
        "price": 80,
        "location": "City Center",
        "amenities": [
            "Wi-Fi",
            "Kitchen",
            "Air Conditioning",
            "TV"
        ],
        "rating": 4.7,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720"
        ],
        "host": {
            "id": "987654",
            "name": "John Doe",
            "avatar": "https://example.com/avatar.jpg",
            "superhost": true
        }
    },
    {
        "id": "789012",
        "title": "Pelkosenniemi, Finland",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Abiansemal, Indonesia",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Hua Hin District, Thailand",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Murbad, India",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-661201204231662812/original/6bb13f64-bf25-43fa-b042-16c8ccf1c6bd.jpeg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Thung Samo, Thailand        ",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Chittorgarh, India",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-52068342/original/a02a7d4d-a1bc-418f-a6de-970d41beade0.jpeg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Kecamatan Kuta Selatan, Indonesia",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-50688017/original/3139801a-9ce6-4f93-99e2-4ed9f6430298.jpeg?im_w=720"],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Aewol-eup, Jeju-si, South Korea",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/241226c8-6385-4815-8f4d-6a532dd60910.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Puerto Galera, Philippines",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/106773506/8650a906_original.jpg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Don Tako, Thailand",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-52439121/original/f8be2629-895f-4a3c-9e99-e63852b68a30.jpeg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
    {
        "id": "789012",
        "title": "Seongsan-eup, Seogwipo, South Korea",
        "description": "Enjoy a relaxing vacation in our spacious beach house. With stunning ocean views and direct beach access, it's the perfect getaway.",
        "price": 150,
        "location": "Beachfront",
        "amenities": [
            "Wi-Fi",
            "Swimming Pool",
            "Private Beach Access",
            "Balcony"
        ],
        "rating": 4.9,
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-687298015456148799/original/ad80e8bf-cac9-4e99-b2db-485017551ea4.jpeg?im_w=720"
        ],
        "host": {
            "id": "543210",
            "name": "Jane Smith",
            "avatar": "https://example.com/avatar2.jpg",
            "superhost": false
        }
    },
]

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
      },
      {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is has windmills!',
      },
      {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
      },
      {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
      },
      {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
      },
      {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!'
      },
      {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is an ancient castle!'
      },
      {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'This property is in a spooky cave!'
      },
      {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property offers camping activities!'
      },
      {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in arctic environment!'
      },
      {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!'
      },
      {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn!'
      },
      {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is brand new and luxurious!'
      }
]