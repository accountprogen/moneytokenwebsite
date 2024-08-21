window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }

    const connectWalletBtn = document.getElementById('connectWalletBtn');

    connectWalletBtn.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                await ethereum.request({ method: 'eth_requestAccounts' });
                connectWalletBtn.textContent = 'Wallet Connected';
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    });
});