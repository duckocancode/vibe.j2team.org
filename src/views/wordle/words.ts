// Vietnamese 6-character words in NFC Unicode
// Each entry verified: [...word].length === 6
// Counted as: each precomposed char (e.g. ờ = U+1EDD) = 1 unit

// ─── Answer pool ────────────────────────────────────────────────────────────
export const ANSWER_WORDS = [
  // tr- family
  'trường', // school / field        t,r,ư,ờ,n,g
  'truyện', // story / novel         t,r,u,y,ệ,n
  'truyền', // transmit              t,r,u,y,ề,n

  // th- family
  'thường', // usual                 t,h,ư,ờ,n,g
  'thương', // love / pity           t,h,ư,ơ,n,g
  'thưởng', // reward                t,h,ư,ở,n,g
  'thướng', // upward (direction)    t,h,ư,ớ,n,g
  'thuyền', // boat                  t,h,u,y,ề,n
  'thuyết', // theory                t,h,u,y,ế,t
  'thiêng', // sacred / magical      t,h,i,ê,n,g
  'thuổng', // shovel / spade        t,h,u,ổ,n,g
  'thuồng', // river beast (myth)    t,h,u,ồ,n,g
  'thoáng', // airy / brief flash    t,h,o,á,n,g

  // ch- family
  'chương', // chapter               c,h,ư,ơ,n,g
  'chuyện', // matter / story        c,h,u,y,ệ,n  (duplicate guard below)
  'chuyên', // specialized           c,h,u,y,ê,n
  'chuyển', // transfer              c,h,u,y,ể,n
  'chuyền', // pass along            c,h,u,y,ề,n
  'choáng', // dizzy / overwhelmed   c,h,o,á,n,g
  'chiêng', // bronze gong           c,h,i,ê,n,g

  // ph- family
  'phương', // direction             p,h,ư,ơ,n,g
  'phượng', // phoenix               p,h,ư,ợ,n,g
  'phường', // ward / neighborhood   p,h,ư,ờ,n,g

  // nh- family
  'nhường', // yield / concede       n,h,ư,ờ,n,g
  'nhượng', // cede / transfer       n,h,ư,ợ,n,g

  // kh- family
  'khuyên', // advise                k,h,u,y,ê,n
  'khuyết', // lacking / absent      k,h,u,y,ế,t
  'khuếch', // amplify               k,h,u,ế,c,h
  'khướng', // thrush (bird)         k,h,ư,ớ,n,g
  'khoảng', // space / range         k,h,o,ả,n,g
  'khoảnh', // moment / tiny piece   k,h,o,ả,n,h
  'khiêng', // carry (on shoulders)  k,h,i,ê,n,g

  // ngh- family  (n,g,h = 3 chars → total 6 with 3-char ending)
  'nghiêm', // strict / solemn       n,g,h,i,ê,m
  'nghiên', // inkstone / grind      n,g,h,i,ê,n
  'nghiệp', // career / karma        n,g,h,i,ệ,p
  'nghiến', // gnash / grind teeth   n,g,h,i,ế,n
  'nghịch', // naughty / reverse     n,g,h,ị,c,h
  'nghách', // nook / crack          n,g,h,á,c,h

  // gi- family
  'giường', // bed                   g,i,ư,ờ,n,g

  // others
  'ngoằng', // winding / crooked     n,g,o,ằ,n,g
  'chuồng', // cage / stable         c,h,u,ồ,n,g
]
  // Runtime safety: keep only true 6-char words
  .filter((w) => [...w.normalize('NFC')].length === 6)
  // Deduplicate
  .reduce<string[]>((acc, w) => (acc.includes(w) ? acc : [...acc, w]), [])

// ─── Valid guesses (superset of answers) ────────────────────────────────────
// For now same as answers; you can expand this list later.
export const VALID_WORDS: string[] = ANSWER_WORDS

// ─── Daily word ─────────────────────────────────────────────────────────────
export function getDailyWord(): string {
  const epoch = new Date(2025, 0, 1) // anchor date: 2025-01-01
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dayIndex = Math.floor((today.getTime() - epoch.getTime()) / 86_400_000)
  const pool = ANSWER_WORDS.length > 0 ? ANSWER_WORDS : ['trường']
  return pool[Math.abs(dayIndex) % pool.length]!
}

export function getTodayKey(): string {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
