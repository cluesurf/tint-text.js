import chalk from 'chalk'
import { Tint } from './type'

export default function make(text: string, tint: Tint) {
  let link = chalk
  if (tint.bold) {
    link = link.bold
  }
  if (tint.line) {
    link = link.underline
  }
  if (tint.backTone) {
    link = link.bgHex(tint.backTone)
  }
  if (tint.tone) {
    link = link.hex(tint.tone)
  }
  return link(text)
}
