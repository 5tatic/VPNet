document.addEventListener('DOMContentLoaded', function() {
    const detectButton = document.getElementById('detect_button');

    detectButton.addEventListener('click', function() {
        fetch('/detect_networks')
            .then(response => response.json())
            .then(data => {
                const networkSelect = document.getElementById('network_select');
                networkSelect.innerHTML = ''; // Clear the dropdown

                // Populate the dropdown with detected networks
                data.forEach(network => {
                    const option = document.createElement('option');
                    option.value = network;
                    option.textContent = network;
                    networkSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
