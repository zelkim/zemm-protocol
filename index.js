const zemm1 = "001002dFGcstring1§hello world|string2§this is me"

const parseZemmHeader = (zemm) => {
  const raw = zemm.slice(0, 10)
  const currentSection = parseInt(raw.slice(0, 3));
  const maxSections = parseInt(raw.slice(4, 6));
  const uuid = raw.slice(6, 10);

  return { currentSection, maxSections, uuid }
}

const parseZemmKeyValue = (zemm) => {
  const kv = zemm.slice(10);

  const kv_raw = kv.split('|');
  let zemmJson = {};
  kv_raw.forEach((kva) => {
    const zemmObj = kva.split('§');
    zemmJson[zemmObj[0]] = zemmObj[1]
  })

  return zemmJson
}

const zemmParser = (contents) => {
  if (contents.length > 160) {
    return { error: "Invalid sms" }
  }

  return { headers: parseZemmHeader(contents), data: parseZemmKeyValue(contents) }
}

console.log(zemmParser(zemm1))
