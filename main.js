document.querySelector('button1').addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})