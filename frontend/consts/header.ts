export interface HeaderProps {
  handleSidebarOpen: () => void
  headerTitle: string
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}
