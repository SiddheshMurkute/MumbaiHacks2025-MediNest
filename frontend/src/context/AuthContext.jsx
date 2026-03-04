import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check for existing user in localStorage
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (e) {
                console.error('Error parsing stored user:', e)
            }
        }
        setIsLoading(false)
    }, [])

    const login = (email, password) => {
        // Mock login - in real app, this would call an API
        if (email && password) {
            const newUser = {
                id: Math.random().toString(36).substr(2, 9),
                email: email,
                name: email.split('@')[0],
                isLoggedIn: true
            }
            setUser(newUser)
            localStorage.setItem('user', JSON.stringify(newUser))
            return { success: true, user: newUser }
        }
        return { success: false, message: 'Invalid credentials' }
    }

    const signup = (name, email, password) => {
        // Mock signup
        if (name && email && password) {
            const newUser = {
                id: Math.random().toString(36).substr(2, 9),
                name: name,
                email: email,
                isLoggedIn: true
            }
            setUser(newUser)
            localStorage.setItem('user', JSON.stringify(newUser))
            return { success: true, user: newUser }
        }
        return { success: false, message: 'Please fill all fields' }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('userProfile') // Clean up legacy key
    }

    const value = {
        user,
        isLoading,
        login,
        signup,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
