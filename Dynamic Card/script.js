 const products=[
            
    {
        image:"https://tse1.mm.bing.net/th/id/OIP.NC2CfJYUIVWbPbdc6tqSnQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        name: "Laptop",
        brand: "Dell",
        price: "₹65,000",
        category: "Electronics"
    },

    {   
        image:"https://www.gizmochina.com/wp-content/uploads/2023/10/iPhone-16-Pro-Snapdragon-X75-modem.jpg",
        name: "iPhone",
        brand: "Apple",
        price: "₹80,000",
        category: "Mobile"
    },

    {
        image:"https://pbs.twimg.com/media/HI1utXma8AAcb--.jpg",
        name: "Shoes",
        brand: "Nike",
        price: "₹4,000",
        category: "Fashion"
    },

    {
        image:"data:image/webp;base64,UklGRqQNAABXRUJQVlA4IJgNAADwWgCdASoeAR4BPp1Gn0wlo6KoI3LbCQATiWlu9Hz4sO9X3ZjsHAbwoHHei+b3VXav+4cZHB4954P/y+txnpe+v+7b6gluy0DY4UA5loGxwoBzK9GFx4iee9n53uDhwMEZ5VFEAJobHCfiHam3hNfzNob5mBPZ0k6Rqx3aQwlgf0t2nEhmVjkBQIDm0B3pw2TNky4D9wTV0bWeM1HCdA/+WWRFad8rpqh99+RFexRj4f503ZZ7UOZbZxHFSwMhXal7Wf6DlOG+EQMLUAK/kfRwoBxwrcxHEItulCCuBmRXebxB17yvR3gP8LYdoqnclA5qWK68QZqjHLM9AHM2xl367lIea3exyIDBIrnLYnp+eJhoE+Jn1S+Bn/tcRhYwRNrViAcywNcvfuuCcxBG8hKEmpOz6cfm0FcSXklD8pVYY1+SJ/6/66U0e1sIG8EKU6qOEspjhvgOur1x5r65tQOLVi4SL+o4FLX2oqwl1+MV+qQJmpY0kUGs0sHan8jRPMUtl4sr9ubTWZcySpkWZfqiYcAyU/6DHXG5w4x7wcJ96YxA4xXAiyj4C77qQGE8fBtEQ4P2o0IFE3q2Mk1BWeOYvYVIUSrboC8DXGz056FPgalykveCsTgccai6TwbAfLbf54IV9Pu0cLgso/V90gIoVSOrKXzhTOkAg1mcQSPuTmhbxdw2ePSsZCLxeitIOsDTYJNePdzjOZx4Y3r7M4Ukw3EWwGsu/9fAwIzBDR+7haT7K++g7PqOEorxUfmk0yhGvIah7MsA7nbJNgqPovd5jbjLvbYHbfA+uVMMLsBb/TI98JjhPySQHSAZeoN28qibktnrN6F4WRym7yoVeI434EOS0tQkdEFOxfif3dGZkK1UCA5kNo+Bu7MLOhPYPvd35RVHREy/Wh2iHxuGregqmiBqHzetZ6o+yrOwQcy0RwaTR8shqDn8K32XNP5iBxqGHCenTdloGxwoBzLQNi4AAP7+HKAAEL0KdqqVCrhU0rIcGw+iH1qRyxCAVNtnvuZ3A9piMYK1jBC+w5wf8/+EaFBkaHs66BmpHCVlorP9O+YQ4TEgGKTBP61vPKc5Wut2HjsnHLSSxNrdG4H4oM9J88pDKfiwJMwLdwE3QBg017NInOKjxvO9tST/Y2RrcUDGRhE6f+vA3IhtEVXl7dtK0kGvRQYrT1vdjwpLrzfDwhhVCEbIoX1VYZ8cFozFUvbep4a/l3bvm7Q+Db+K9jX4h7Rc5070L3NAdrFsfCzXDgwj7WswdZDstLQ+FVIc948sfddjYRP+wEX9wk4HfQQDT5YaBzRf82F2IONJplANQgU0ePOLsZD0IidmxgKiI1fcFk4eZu4NCQ+sQIEOEt8Y8JD7AeAQpRny7lUCYGYOYXP5MrtYT1UPALb+gkE10jeD2aMUIzqBPydOnj43T9rEqc1qXoy60cMHYiWY6isol+fhvUCpi+kIP/fOd+ZBqMS9+d6y/mHfVJCVeAI8dfBgOBb/B0WQA7Jdl+UvTpyup8zbaDkw41GBiFqOIanjw+FoioCQCk2nKHo5W6D76RRKpbAv5fCi1lD1qXXhobmZgtNL1Nf33FsLKrakH7ZJSEljRomu7i8NtSUNzybMcIOCqVi+74op5YVWfAvuQKiS3t0ZarIYjNrNkhV8mkz5fIghO3KSUvuXFnG5H8h8WdAsxO02okRGTCtVlNl+bdQrGhV/+9s6uCayRj3FXEG+XAqYECW8B3gtw3S00+j0IFixhxsbccKykrwiunuevuEhvawyfwI98Kgh72Xb6HRmR+kP+IaGmGbQuu9/UW4E1jcMplU9UNGiRAUahkek0IV3k/OJzYGbthSMWqkv9VSEp+2YkZucuIigdLah9Sz4SJuqJpUJtn1QGKL3QeC/BJK9E8RIDw4+LCf0coFvYoljFqPCFkus0a/4FHg7Iu5sNBvCFHQiZJM18yux2lES6XUBcoyInDLfm/TCvqE98YD//v/7lMxbGBjky9XXjxrO00H9UpKru/eapV8Q16lEavtMbfSOUfHj0fU/a9HQTicHzEBpgYICTwoc/jGPyJLYaaP9eGk6BelPk+6cFY/+fN0Ntyw4+ceNzDqcih4FNJBS8YRrndGXRITDLaSB6n8k8OE8x9FvxqQlVv5xxnIYSmLqBQwH8OSpNppDHDav7o32N4223nR6WsWH5KI9t8av3i54GlK+mFAeTiG6kNuZUg7SSZ7+iV6DCoDTNxBDpZxvJaKramAlU82cqTuvQK/YQ2feeDc5SG+22TpWGQo6DvGfgN7TthENH4m5ky0Fyq3UmasSh8gNsscehAlffxaMxhI2fAec6tIdfyYb+889LzGUU3VFalU0hBvPhum6ZVtAOPred9wxUCi2Z2zM0XZoDTv3vpl+Zbb7PL4HEZoBqJY/AD8Dh9YgjQQJhedsGr75i/Oe4gDlBfR2L2mU28M8ir0pM0DFrLTohKkxSyro3GmhzLnF5rXfUQzG/KJKO4XX6rSX/iSOw6gdfPyJWIr8vFANHGTji5tlvb91SGHhjv7TpHHcwb7Q1Ydy3wN02rBckbbE/gd4MTJ/wl0CNbOsl0mRsw7u6rfMaQ41fKBbO3WwRVyupRy9RvK73hh19QaEws1abo5xfzvOfoORxozO71vqxjCLAJrELiicWX6i2MS49djIHYCqY6UrO9NwULQpgtZnE7qKZ4BSPWoEPwi5/0R7P49L7ASX6Y9nyOU60D3ysqMLrdqlhvt1s1ENuJWPxn/9hSJjWHQ0rWWj6JEPx60DOB6ELs6hGZIxSn7po836AgNbwEWntbtUw18Ej5JtMOePcs1ifyl0H+d2iN1HB9ozgi3NoXXqTwft9kYcaIoggPJdLcVNP35uYISwESI21hNh21+BPp3IcAt6KKLZ25sp4G/px7K4BVC9J7Ca4/h2cqVQYeCLvLRQ9B/7h+BpiYva4ZzPnRIbi1HgoGG7932bQD+fpRvjP8lMuoedtelhF6E3HGlbkI+DwEaxUqoO15iwKtbUnutB4d8gU1Qm0e0nQWqceQEGWD7eeMBSRcR94Bs5mI5WEKLMRzQyh8+4mS5h2ihc1i+eWhyfn2quDOtfff/Au3YddyRyBVla8+KTQa0jacW1p36Unsgc2prUf8NE7/Na8eo6mIIz3EuqKwGo28gCDxRHNhbX2M3CO+/XdHTwX03Z7UTpP/TJPLUGi6zyHaWhxjOnkWIbpWPklVH/CoIAVGy48CJlsU05xnO3eOAva4hHZ9RD60d9Alrg1k+n4vsjSM6KbiOxLc5V519jRUMX8bdxU3FO4IhIg/x1dC+kel2wqETa85boJhbztJcKbnYbznGHPf3TtiAG+9OkkRcY75OfaV+Bagdeo4SQb4MO3+zjQC6Hi0SS/adT557ZVpL+/lj0SH8h70Kwqf1lYXRcrWll0Aa5VCgfKH32W5limc68O9ZF24f3pWSMwPy/MMEphMftDjRI20jfaZ+lR39GpTAbqpR07tju24I1EsaB4pj0U2mhlvn2oJbWemFmTfDd9Tkz9oGu89BVsnggiW9DXGeUHU9WpXHqf1qcZmmTn2eyFGPZ1qST2vshlnhFwaxVZYsyDTIHTwIEo2Fm2Ku5qiEZMg6KazdahDRZi/wECVH2iqnjubYxT+uQ0WDGynW082UeaBd3s68boiUwnr87tU+I/lX8Y4usVi134bze83HujCQ5BtJwdLFmf4XntZ8eLg89aCBZgmCUpyf5axdVJThlHDojRwM3y3kIKfBWaTwvtmfRsoZx1LtndFlw/pfNeRf8wQvwMoxckX8vReO+BKVZPkrbYYm/2AFmMWEJgQwej7VeQnOw5bW5UJCjFaNKC9vOV6rWpoeferA4U84QDSSV5TNXnCZj81g4FQkyVYzJEf3huHgtomWIiYTWzGMbLFatUl7/IO8GAG+3uCGbywLG8xc4ZZQoGyBvOQZiEcV3C3YrbzMM+aJCGsaArSVyGWUhIDiUoDrxreb9bTFWXZiF1lW7FvcKD98U0AKNnzaMYhe6sFg2WxuG4UlIbVF5vGdQ8bnwAlNLoLNuo+qSpnWw5aoZkbSj9ehcUyS6HvU4hYd8rTYzCWkhNTos5b93xb2uAQSYwiDFhDELaxhrtMNYRERs3ktN8gDmp48i0Hp6LlhAictjVt/6tmtYSUbvxhCVJqObgrst+3rfkVBs9l9nRSZ13Og09+QcF+JscYU4toBS8SdJmHrNaZgpqAMYAp3BmGyXqr6jxrWuZo4iQRlpciqYAAH8gO2lnvCRPE1GkpGBQe1eWkyZTL4P16m4vkMiUX9/B2YWBIUkZFp5Mndyr8z0YvRUVxX5m5+nbmoh1QIqM50f7RAF4hlmW1+zCZeSvGGHFqJPLkMHjqw/wBca5W6BaNQkQq1b4MLoFEu/GchVVRkfqUy5nvIfnGpJByKUW6LA+ai2AmxNjVrBtLVSeemcwyVRBDZ0K5CyHiIJPEg0UfPQNUcJZyT8SczLJgL+fmFNZlACVwSEovzU8Ky3G7lygVqXjh5hiw7aYdaDzweO8o/0ZVVaWZs7TEiJWsxCn5DY0I2VTshidfq1zDfCWmqq56VfZ/DeOs4DPZKQEOD3V6XvomMe6z3fUzc0p3zZk6M37SATIuiap63hggAAAAA=",
        name: "Headphones",
        brand: "Sony",
        price: "₹5,500",
        category: "Electronics"
    },

    {
        image:"https://tse2.mm.bing.net/th/id/OIP.uOZlvGRd58uv7KzRtpqPFQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        name: "Watch",
        brand: "Titan",
        price: "₹3,500",
        category: "Accessories"
    }
   ];
        let container=document.querySelector(".cards-container")

        products.map(product =>{
            let card=document.createElement("div")
            card.className="card";
            card.innerHTML= `
                       <img src="${product.image}" alt="${product.name}">
                       <h3>${product.name}</h3>
                       <p>Brand: ${product.brand}</p>
                       <p>Category: ${product.category}</p>
                       <p>${product.price}</p>

            `;
            container.appendChild(card);
        })
   