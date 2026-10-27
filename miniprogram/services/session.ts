export type SessionRole = 'admin' | 'member' | ''

export type SessionState = {
  openid: string
  nickname: string
  avatarFileId: string
  familyId: string
  familyName: string
  role: SessionRole
  familyStatus: 'active' | 'dissolved' | ''
}

const emptySession = (): SessionState => ({
  openid: '',
  nickname: '',
  avatarFileId: '',
  familyId: '',
  familyName: '',
  role: '',
  familyStatus: '',
})

let session: SessionState = emptySession()

export function getSession(): SessionState {
  return session
}

export function setSession(next: Partial<SessionState>): SessionState {
  session = { ...session, ...next }
  return session
}

export function clearSession(): void {
  session = emptySession()
}

export function hasActiveFamily(): boolean {
  return Boolean(session.familyId) && session.familyStatus === 'active'
}
