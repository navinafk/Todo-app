import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/assets/images/styles/settings.style'
import { LinearGradient } from 'expo-linear-gradient'
import { VId } from 'convex/values'
import { Ionicons } from '@expo/vector-icons'

const Preferences = () => {
    const [isAutoSync ,setAutoSync] = useState(true)
    const [isNotificationsEnabled , setNotificationsEnabled] = useState(true)
    const {isDarkMode,toggleDarkMode,colors} = useTheme();
    const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.settingIcon}>
                <Ionicons name='moon' size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingsStyles.settingText}>DarkMode</Text>
        </View>
        <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        thumbColor={"#fff"}
        trackColor={{false:colors.border,true:colors.primary}}
        />
      </View>

       <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.warning} style={settingsStyles.settingIcon}>
                <Ionicons  name="notifications"  size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingsStyles.settingText}>Notification</Text>
        </View>
        <Switch
        value={isNotificationsEnabled}
        onValueChange={ () => setNotificationsEnabled(!isNotificationsEnabled)}
        thumbColor={"#fff"}
        trackColor={{false:colors.border,true:colors.warning}}
        />
      </View>

      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.success} style={settingsStyles.settingIcon}>
                <Ionicons  name="notifications"  size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
        value={isAutoSync}
        onValueChange={ () => setAutoSync(!isAutoSync)}
        thumbColor={"#fff"}
        trackColor={{false: colors.border,true:colors.success}}
        />
      </View>
      </LinearGradient>
  )
}

export default Preferences