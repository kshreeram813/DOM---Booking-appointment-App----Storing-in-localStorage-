    <script>
        function saveToLocalStorage(event)
        {
            event.preventDefault();
            let name1 = event.target.username.value;
            let email1 = event.target.email.value;
            let phone1 = event.target.phone.value;

            localStorage.setItem('NAME',name1);
            localStorage.setItem('EMAIL',email1);
            localStorage.setItem('PHONE',phone1);
        }
    </script>
