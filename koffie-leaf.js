(function() {

    /* Turns hamburger icon to x */

    function changeIcon() {
        menuButton.classList.toggle("change");
    }

    /* Drop down menu appears after clicking menu icon */

    function dropDown() {
        const menu = document.getElementsByClassName('menu-container')[0];
        if (menu.getAttribute('id') === 'menu-invisible') {
            menu.setAttribute('id', 'menu-visible');
        } else {
            menu.setAttribute('id', 'menu-invisible');
        }
    }

    const menuButton = document.getElementById('icon-container');
    if (menuButton) {
        if (menuButton.addEventListener) {
            menuButton.addEventListener('click', function() {
                dropDown();
                changeIcon();
            }, false);
        } else {
            menuButton.attachEvent('onclick', function() {
                dropDown();
                changeIcon();
            });
        }
    }

    /* Front-end validation*/

    const emailAddress = document.getElementById('email-input');

    function validationInput(e) {
        if (!e) {
            e = window.event;
        }

        let target = e.target || e.srcElement;

        if (target === document.activeElement) {
            target.setAttribute('class', 'input-color-red');
        }

        if (target.value === '' && target !== emailAddress) {
            target.setAttribute('class', 'input-color-red');
        }

        if (!target.value === false && target !== emailAddress) {
            target.setAttribute('class', 'input-color-green');
        }

        if (target === emailAddress && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
            target.setAttribute('class', 'input-color-green');
            return true;
        } else if (target === emailAddress) {
            target.setAttribute('class', 'input-color-red');
            return false;
        } else {
            return false;
        }


    }


    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        if (contactForm.addEventListener) {
            contactForm.addEventListener('click', function(e) {
                validationInput(e);
            }, false);
        } else {
            contactForm.attachEvent('onclick', function(e) {
                validationInput(e);
            });
        }
        if (contactForm.addEventListener) {
            contactForm.addEventListener('input', function(e) {
                validationInput(e);
            }, false);
        } else {
            contactForm.attachEvent('oninput', function(e) {
                validationInput(e);
            });
        }
    }

    function validation(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
        const textInput = document.getElementById('text-input').value;
        const textArea = document.getElementById('text-area').value;
        const textGroup = [textInput, textArea];
        for (let i = 0; i < textGroup.length; i++) {
            textGroup[i] = textGroup[i].replace(/&/g, '&#38;');
            textGroup[i] = textGroup[i].replace(/\(/g, '&#40;');
            textGroup[i] = textGroup[i].replace(/\)/g, '&#41;');
            textGroup[i] = textGroup[i].replace(/\./g, '&#46;');
            textGroup[i] = textGroup[i].replace(/</g, '&lt;');
            textGroup[i] = textGroup[i].replace(/>/g, '&gt;');
            textGroup[i] = textGroup[i].replace(/'/g, '&#x27;');
            textGroup[i] = textGroup[i].replace(/"/g, '&quot;');
            textGroup[i] = textGroup[i].replace(/\//g, '&#x2F;');
            textGroup[i] = textGroup[i].replace(/\\/g, '&#92;');
            textGroup[i] = textGroup[i].replace(/\*/g, '&#42;');
            textGroup[i] = textGroup[i].replace(/\?/g, '&#63;');
            textGroup[i] = textGroup[i].replace(/\[/g, '&#91;');
            textGroup[i] = textGroup[i].replace(/\]/g, '&#93;');
            textGroup[i] = textGroup[i].replace(/\^/g, '&#94;');
            textGroup[i] = textGroup[i].replace(/\$/g, '&#36;');
            textGroup[i] = textGroup[i].replace(/`/g, '&#x60;');
            textGroup[i] = textGroup[i].replace(/\{/g, '&#123;');
            textGroup[i] = textGroup[i].replace(/\}/g, '&#125;');
            textGroup[i] = textGroup[i].replace(/\=/g, '&#61;');
            textGroup[i] = textGroup[i].replace(/\!/g, '&#33;');
            textGroup[i] = textGroup[i].replace(/\|/g, '&#124;');
            textGroup[i] = textGroup[i].replace(/\:/g, '&#58;');
            textGroup[i] = textGroup[i].replace(/\-/g, '&#45;');
        }
		if(textInput === '' && textArea === '' && emailAddress.value === '') {
			alert('Fill in contact page');
			return
		}
		if(textInput === ''){
			alert('Please fill in your name.')
		}
		if(textArea === '') {
			alert('Please input a message.')
		}
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value))) {
            alert('Please input a proper email.')
        } else {
			alert('Your message has been received. We will respond as soon as possible.')
		}
	}


    const submitButton = document.getElementById('submit');
    if (submitButton) {
        if (submitButton.addEventListener) {
            submitButton.addEventListener('click', function(e) {
                validation(e);
            }, false);
        } else {
            submitButton.attachEvent('onclick', function(e) {
                validation(e);
            });
        }
    }

    /* Slideshow */

    let slideIndex = 0;
    const images = document.getElementsByClassName('slideshow-image');

    function slideshowRightChange() {
        slideIndex++;
        let i = 0;

        for (i = 0; i < images.length; i++) {
            images[i].className = 'none-display-image' + ' ' + 'slideshow-image';
        }

        if (slideIndex > (images.length - 1)) {
            slideIndex = 0;
        }

        images[slideIndex].className = 'display-image' + ' ' + 'slideshow-image';
    }

    function slideshowLeftChange() {
        slideIndex--;
        let i = 0;
        for (i = 0; i < images.length; i++) {
            images[i].className = 'none-display-image' + ' ' + 'slideshow-image';
        }

        if (slideIndex < 0) {
            slideIndex = (images.length - 1);
        }

        images[slideIndex].className = 'display-image' + ' ' + 'slideshow-image';
    }

    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    if (leftButton || rightButton) {
        if (leftButton.addEventListener) {
            leftButton.addEventListener('click', function() {
                slideshowLeftChange();
            }, false);

        }
        if (rightButton.addEventListener) {
            rightButton.addEventListener('click', function() {
                slideshowRightChange();
            }, false);

        } else {
            leftButton.attachEvent('onclick', function() {
                slideshowLeftChange();
            });

            rightButton.attachEvent('onclick', function() {
                slideshowRightChange();
            });
        }
    }
})();
