//created an array to stire the list of the guest
const guestlist = [];
renderguestlist(); 
  //created a functuion displays the name on page where i introduced html in js. 
  
function renderguestlist () {

    let guestlistHTML = '';
    //used the for loop prefered the for from the while where it add a name in the array
    for (let i = 0; i < guestlist.length; i++) {
        const guest = guestlist[i];
        const status = guest.attending ? 'Attending ' : 'Not attending'
       
        const HTML = 
        `<p>
        ${guest.name} - ${status}
        <button onclick="
            guestlist.splice (${i}, 1);
            renderguestlist();
            
        
        ">delete</button></p>`

        guestlistHTML += HTML;

    }
    console.log(guestlistHTML);
    document.querySelector('.js-guest-list')
    .innerHTML = guestlistHTML;
    }
    //this is the function that adds the guest list
    function addguest() {
        const inputelement = document.querySelector('.js-name-input');
        const name = inputelement.value;

        
        console.log(guestlist);

        inputelement.value = '';
        if (guestlist.length >= 10 ) {
            alert('Guest list is full! Maximum guest is 10')
        }else {guestlist.push({name : name, attending : true});
        
        inputelement.value ='';
        }

        renderguestlist();
     }
     //function of the tooglrsvp for tyhe attendance
       function togglersvp(index) {
            guestlist[index].attending = !guestlist[index].attending;
            renderguestlist();
        }



