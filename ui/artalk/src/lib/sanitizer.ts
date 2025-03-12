import insane from 'insane'

const insaneOptions = {
  allowedClasses: {},
  // @refer CVE-2018-8495
  // @link https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-8495
  // @link https://leucosite.com/Microsoft-Edge-RCE/
  // @link https://medium.com/@knownsec404team/analysis-of-the-security-issues-of-url-scheme-in-pc-from-cve-2018-8495-934478a36756
  allowedSchemes: [],
  allowedTags: [],
  allowedAttributes: {},
}

export function sanitize(content: string): string {
  // @link https://github.com/markedjs/marked/discussions/1232
  // @link https://gist.github.com/lionel-rowe/bb384465ba4e4c81a9c8dada84167225
  return insane(content, insaneOptions)
}
