const messages = [
    'Thank you Kisulea <3<3<3',
    'Esti cea mai deosebita, cea mai frumoasa, unica 😻',
    'Te iubesc foarte tare kisulea 💕',
    'Ma faci cel mai fericit ❤️',
    'Tu esti tot ce mi-am dorit vreodata! 😘',
    'Thank you for being mine 👩‍❤️‍👨',
    'I will make it all possible to make you always happy 💓'
];

let messageIndex = 0; // Keep track of the message index

document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'yes') {
            document.querySelector('#particles-js').style.display = "block";
            document.querySelector('p').style.display = "none";

            document.querySelector('#yes').innerText = "Continue";
            document.querySelector('h1').innerText = messages[messageIndex];
            document.querySelector('#gif').src = "https://media.tenor.com/Ka7sVbRXQUwAAAAj/tkthao219-bubududu.gif";


            particlesJS('particles-js', {
                "particles": {
                    "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                    },
                    "color": {
                    "value": "#FF0000"
                    },
                    "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#FF0000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "/images/heart.png",
                        "width": 50,
                        "height": 50
                    }
                    },
                    "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                    },
                    "size": {
                    "value": 50,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4.795204795204795,
                        "size_min": 0,
                        "sync": false
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 32.06824121731046,
                    "color": "#ffffff",
                    "opacity": 0.03206824121731046,
                    "width": 0
                    },
                    "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "resize": true
                    },
                    "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                        "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 0,
                        "size": 40,
                        "duration": 0.6496617698410762,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 300,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
                }
            });

        }

        if(e.target.id === "no") {
            document.querySelector('#particles-js').style.display = "none"
            const messages = [
                'Kisulea prastite menea :(', 'Pozhalusta daite mne eshio odin shans🥲', 'Kisuleaaaaaa pojalusta skajite daaa 😭😭'
            ]
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random]
            document.querySelector("#gif").src = "https://media.tenor.com/RJgIui1E_2QAAAAj/teddy-bear.gif"

        }

        if (e.target.innerText === "Continue") {
            if (messageIndex < messages.length) {
                document.querySelector('h1').innerText = messages[messageIndex];
                messageIndex++;
            } else {
                // Last message reached, change the GIF and button text
                document.querySelector('#gif').src = "https://media.tenor.com/s5RdbuD_MlIAAAAi/love-letter-objects.gif";
                document.querySelector('#yes').innerText = "Press on envelope";
                document.querySelector('#no').style.display = "none"; // Hide "No" button

                document.querySelector('h1').style.display = "none";
            }
        }
    });
});

// Event listener for clicking the GIF (envelope opens)
document.querySelector('#gif').addEventListener('click', function () {
    if (document.querySelector('#gif').src.includes("love-letter-objects.gif")) {
        document.querySelector('#gif').src = "https://media.tenor.com/38G2RtTL5WQAAAAi/tkthao219-bubududu.gif";
        document.querySelector('h1').innerText = "I am taking you out for dinner on Valentine's Day";
        document.querySelector('h1').style.display = "block";
        document.querySelector('#yes').style.display = "none"; // Hide the button after final message
    }
});
