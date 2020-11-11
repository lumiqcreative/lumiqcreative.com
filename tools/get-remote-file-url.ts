const getRemoteFileUrl = (fileName: string): string => {
  const remoteUrl = 'https://content.lumiqcreative.com'
  const fileNameFormat = /[a-zA-Z0-9-]+\.(png|woff2)/
  if (!fileName.match(fileNameFormat)) {
    throw new Error(
      `Illegal file name! String must match regular expression \`${fileNameFormat}\`.`
    )
  }
  const fileExtension = fileName.split('.').pop()
  let remoteFileUrl = ''
  switch (fileExtension) {
    case 'png':
      remoteFileUrl = `${remoteUrl}/img/${fileName}`
      break
    case 'woff2':
      remoteFileUrl = `${remoteUrl}/fonts/${fileName}`
      break
  }
  return remoteFileUrl
}

export default getRemoteFileUrl
