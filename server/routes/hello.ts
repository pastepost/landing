export default defineEventHandler(async  (event) => {

  const fileUrl = "http://172.234.96.33/api/files/ds90kgdmx5dlu9x/nyp43fdpgpei65i/ptica_YG9iWtqtTc.txt?token="

  try {
    const response = await $fetch(fileUrl, { responseType: 'text' })

    event.res.setHeader('Content-Type', 'text/plain')
    return response
  } catch (error) {
    console.error('Error fetching file:', error)
    event.res.statusCode = 500;
    return 'Failed to fetch file'
  }
});
