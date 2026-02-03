<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, Image as ImageIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  senderId: string
  content: string
  timestamp: Date
  read: boolean
}

interface Conversation {
  id: string
  user: {
    name: string
    avatar: string
    online: boolean
  }
  lastMessage: string
  timestamp: string
  unreadCount: number
  messages: Message[]
}

// Generate dummy conversations
const conversations = ref<Conversation[]>([
  {
    id: '1',
    user: { name: 'Maria Santos', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', online: true },
    lastMessage: 'Is the condo unit still available?',
    timestamp: 'Just now',
    unreadCount: 2,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Hi! I saw your listing for the 2BR condo in Makati', timestamp: new Date(Date.now() - 3600000), read: true },
      { id: 'm2', senderId: 'me', content: 'Hello! Yes, the unit is still available.', timestamp: new Date(Date.now() - 3500000), read: true },
      { id: 'm3', senderId: 'other', content: 'Great! Can I schedule a viewing this weekend?', timestamp: new Date(Date.now() - 3400000), read: true },
      { id: 'm4', senderId: 'me', content: 'Of course! Saturday or Sunday works for you?', timestamp: new Date(Date.now() - 3300000), read: true },
      { id: 'm5', senderId: 'other', content: 'Is the condo unit still available?', timestamp: new Date(Date.now() - 100000), read: false },
    ]
  },
  {
    id: '2',
    user: { name: 'Juan Dela Cruz', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan', online: false },
    lastMessage: 'Thank you for the information!',
    timestamp: '5 min ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'What are the payment terms?', timestamp: new Date(Date.now() - 7200000), read: true },
      { id: 'm2', senderId: 'me', content: '2 months deposit and 1 month advance.', timestamp: new Date(Date.now() - 7100000), read: true },
      { id: 'm3', senderId: 'other', content: 'Thank you for the information!', timestamp: new Date(Date.now() - 300000), read: true },
    ]
  },
  {
    id: '3',
    user: { name: 'Anna Reyes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna', online: true },
    lastMessage: 'Can pets be allowed in the unit?',
    timestamp: '1 hour ago',
    unreadCount: 1,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Can pets be allowed in the unit?', timestamp: new Date(Date.now() - 3600000), read: false },
    ]
  },
  {
    id: '4',
    user: { name: 'Robert Tan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', online: false },
    lastMessage: 'Looking forward to moving in!',
    timestamp: '3 hours ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'I would like to proceed with the application', timestamp: new Date(Date.now() - 14400000), read: true },
      { id: 'm2', senderId: 'me', content: 'Great! Please fill out this form and submit requirements', timestamp: new Date(Date.now() - 14300000), read: true },
      { id: 'm3', senderId: 'other', content: 'Looking forward to moving in!', timestamp: new Date(Date.now() - 10800000), read: true },
    ]
  },
  {
    id: '5',
    user: { name: 'Sofia Garcia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia', online: true },
    lastMessage: 'Is parking included?',
    timestamp: '5 hours ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Is parking included?', timestamp: new Date(Date.now() - 18000000), read: true },
      { id: 'm2', senderId: 'me', content: 'Yes, one parking slot is included.', timestamp: new Date(Date.now() - 17900000), read: true },
    ]
  },
  {
    id: '6',
    user: { name: 'Mark Lopez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark', online: false },
    lastMessage: 'What floor is the unit located?',
    timestamp: 'Yesterday',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'What floor is the unit located?', timestamp: new Date(Date.now() - 86400000), read: true },
      { id: 'm2', senderId: 'me', content: 'The unit is on the 15th floor with a great view.', timestamp: new Date(Date.now() - 86300000), read: true },
    ]
  },
  {
    id: '7',
    user: { name: 'Lisa Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', online: true },
    lastMessage: 'Is the unit fully furnished?',
    timestamp: 'Yesterday',
    unreadCount: 3,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Is the unit fully furnished?', timestamp: new Date(Date.now() - 90000000), read: false },
    ]
  },
  {
    id: '8',
    user: { name: 'David Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', online: false },
    lastMessage: 'Thanks for the quick response!',
    timestamp: '2 days ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Is water and electricity included in the rent?', timestamp: new Date(Date.now() - 172800000), read: true },
      { id: 'm2', senderId: 'me', content: 'Water is included, but electricity is separate.', timestamp: new Date(Date.now() - 172700000), read: true },
      { id: 'm3', senderId: 'other', content: 'Thanks for the quick response!', timestamp: new Date(Date.now() - 172600000), read: true },
    ]
  },
  {
    id: '9',
    user: { name: 'Carmen Bautista', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carmen', online: false },
    lastMessage: 'Can I visit the property today?',
    timestamp: '3 days ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Can I visit the property today?', timestamp: new Date(Date.now() - 259200000), read: true },
      { id: 'm2', senderId: 'me', content: 'Sure! What time works best for you?', timestamp: new Date(Date.now() - 259100000), read: true },
    ]
  },
  {
    id: '10',
    user: { name: 'Peter Gonzales', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter', online: true },
    lastMessage: 'Are there nearby schools?',
    timestamp: '4 days ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Are there nearby schools?', timestamp: new Date(Date.now() - 345600000), read: true },
      { id: 'm2', senderId: 'me', content: 'Yes, there are 3 international schools within 2km.', timestamp: new Date(Date.now() - 345500000), read: true },
    ]
  },
  {
    id: '11',
    user: { name: 'Jennifer Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer', online: false },
    lastMessage: 'What are the amenities?',
    timestamp: '5 days ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'What are the amenities?', timestamp: new Date(Date.now() - 432000000), read: true },
      { id: 'm2', senderId: 'me', content: 'Pool, gym, function room, and 24/7 security.', timestamp: new Date(Date.now() - 431900000), read: true },
    ]
  },
  {
    id: '12',
    user: { name: 'Michael Tan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', online: true },
    lastMessage: 'Is internet connection available?',
    timestamp: '1 week ago',
    unreadCount: 1,
    messages: [
      { id: 'm1', senderId: 'other', content: 'Is internet connection available?', timestamp: new Date(Date.now() - 604800000), read: false },
    ]
  },
  {
    id: '13',
    user: { name: 'Rachel Wong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel', online: false },
    lastMessage: 'Perfect! I will send my documents.',
    timestamp: '1 week ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'What documents do I need to submit?', timestamp: new Date(Date.now() - 691200000), read: true },
      { id: 'm2', senderId: 'me', content: 'Valid ID, proof of income, and 2 character references.', timestamp: new Date(Date.now() - 691100000), read: true },
      { id: 'm3', senderId: 'other', content: 'Perfect! I will send my documents.', timestamp: new Date(Date.now() - 691000000), read: true },
    ]
  },
  {
    id: '14',
    user: { name: 'System Notification', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=System', online: false },
    lastMessage: 'Your listing has been approved!',
    timestamp: '2 weeks ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'system', content: 'Your listing has been approved!', timestamp: new Date(Date.now() - 1209600000), read: true },
    ]
  },
  {
    id: '15',
    user: { name: 'Thomas Rivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas', online: false },
    lastMessage: 'How long is the lease term?',
    timestamp: '2 weeks ago',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'other', content: 'How long is the lease term?', timestamp: new Date(Date.now() - 1296000000), read: true },
      { id: 'm2', senderId: 'me', content: 'Minimum 1 year lease.', timestamp: new Date(Date.now() - 1295900000), read: true },
    ]
  }
])

const searchQuery = ref('')
const messageInput = ref('')
const activeConversation = ref<Conversation | null>(null)

const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value
  return conversations.value.filter(conv => 
    conv.user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalUnread = computed(() => 
  conversations.value.reduce((sum, conv) => sum + conv.unreadCount, 0)
)

const selectConversation = (conversation: Conversation) => {
  activeConversation.value = conversation
  // Mark messages as read
  conversation.unreadCount = 0
  conversation.messages.forEach(msg => msg.read = true)
}

const sendMessage = () => {
  if (!messageInput.value.trim() || !activeConversation.value) return
  
  const newMessage: Message = {
    id: `m${Date.now()}`,
    senderId: 'me',
    content: messageInput.value,
    timestamp: new Date(),
    read: true
  }
  
  activeConversation.value.messages.push(newMessage)
  activeConversation.value.lastMessage = messageInput.value
  activeConversation.value.timestamp = 'Just now'
  messageInput.value = ''
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="h-[calc(100vh-4rem)] flex bg-white dark:bg-[#0a0a0a]">
      <!-- Conversations List (Left Panel) -->
      <aside class="w-80 border-r border-gray-200 dark:border-zinc-800 flex flex-col bg-white dark:bg-zinc-900">
        <!-- Header -->
        <div class="p-4 border-b border-gray-200 dark:border-zinc-800">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Inbox</h1>
            <div v-if="totalUnread > 0" class="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
              <span class="text-xs font-bold text-white">{{ totalUnread }}</span>
            </div>
          </div>
          
          <!-- Search -->
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              v-model="searchQuery"
              placeholder="Search conversations..."
              class="pl-10 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
            />
          </div>
        </div>
        
        <!-- Conversations -->
        <div class="flex-1 overflow-y-auto">
          <div class="p-2">
            <div
              v-for="conversation in filteredConversations"
              :key="conversation.id"
              @click="selectConversation(conversation)"
              :class="[
                'flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors',
                activeConversation?.id === conversation.id
                  ? 'bg-blue-50 dark:bg-zinc-800'
                  : 'hover:bg-gray-50 dark:hover:bg-zinc-800/50'
              ]"
            >
              <!-- Avatar -->
              <div class="relative flex-shrink-0">
                <img
                  :src="conversation.user.avatar"
                  :alt="conversation.user.name"
                  class="w-12 h-12 rounded-full"
                />
                <div
                  v-if="conversation.user.online"
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"
                />
              </div>
              
              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <h3 class="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {{ conversation.user.name }}
                  </h3>
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">
                    {{ conversation.timestamp }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {{ conversation.lastMessage }}
                </p>
              </div>
              
              <!-- Unread badge -->
              <div
                v-if="conversation.unreadCount > 0"
                class="flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-blue-600 rounded-full flex-shrink-0"
              >
                <span class="text-xs font-bold text-white">{{ conversation.unreadCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Chat Area (Center Panel) -->
      <main class="flex-1 flex flex-col bg-white dark:bg-[#0a0a0a]">
        <!-- Empty State -->
        <div v-if="!activeConversation" class="flex-1 flex items-center justify-center bg-gray-50 dark:bg-zinc-900/50">
          <div class="text-center">
            <div class="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
              <Icon name="lucide:message-circle" class="w-12 h-12 text-gray-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No conversation selected</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Choose a conversation from the list to start chatting</p>
          </div>
        </div>

        <!-- Active Chat -->
        <template v-else>
          <!-- Chat Header -->
          <header class="h-16 px-4 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img
                  :src="activeConversation.user.avatar"
                  :alt="activeConversation.user.name"
                  class="w-10 h-10 rounded-full"
                />
                <div
                  v-if="activeConversation.user.online"
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"
                />
              </div>
              <div>
                <h2 class="font-semibold text-gray-900 dark:text-white">{{ activeConversation.user.name }}</h2>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ activeConversation.user.online ? 'Active now' : 'Offline' }}
                </p>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone class="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video class="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical class="w-5 h-5" />
              </Button>
            </div>
          </header>

          <!-- Messages -->
          <div class="flex-1 p-4 bg-gray-50 dark:bg-black/20 overflow-y-auto">
            <div class="max-w-4xl mx-auto space-y-4">
              <div
                v-for="message in activeConversation.messages"
                :key="message.id"
                :class="[
                  'flex',
                  message.senderId === 'me' ? 'justify-end' : 'justify-start'
                ]"
              >
                <div
                  :class="[
                    'max-w-[70%] rounded-2xl px-4 py-2',
                    message.senderId === 'me'
                      ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800'
                  ]"
                >
                  <p class="text-sm">{{ message.content }}</p>
                  <span
                    :class="[
                      'text-xs mt-1 block',
                      message.senderId === 'me'
                        ? 'text-blue-100'
                        : 'text-gray-500 dark:text-gray-400'
                    ]"
                  >
                    {{ message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Message Input -->
          <footer class="p-4 border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <form @submit.prevent="sendMessage" class="flex items-center gap-2">
              <Button type="button" variant="ghost" size="icon" class="flex-shrink-0">
                <Paperclip class="w-5 h-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" class="flex-shrink-0">
                <ImageIcon class="w-5 h-5" />
              </Button>
              <Input
                v-model="messageInput"
                placeholder="Type a message..."
                class="flex-1"
              />
              <Button type="button" variant="ghost" size="icon" class="flex-shrink-0">
                <Smile class="w-5 h-5" />
              </Button>
              <Button type="submit" size="icon" class="flex-shrink-0 bg-blue-600 hover:bg-blue-700">
                <Send class="w-5 h-5" />
              </Button>
            </form>
          </footer>
        </template>
      </main>

      <!-- Contact Info Panel (Right Panel - Desktop Only) -->
      <aside v-if="activeConversation" class="hidden lg:block w-72 border-l border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div class="h-full overflow-y-auto">
          <div class="p-6">
            <!-- Profile -->
            <div class="text-center mb-6">
              <img
                :src="activeConversation.user.avatar"
                :alt="activeConversation.user.name"
                class="w-20 h-20 rounded-full mx-auto mb-3"
              />
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                {{ activeConversation.user.name }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ activeConversation.user.online ? 'Active now' : 'Offline' }}
              </p>
            </div>

            <!-- Quick Actions -->
            <div class="space-y-2 mb-6">
              <Button variant="outline" class="w-full justify-start">
                <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" class="w-full justify-start">
                <Icon name="lucide:bell" class="w-4 h-4 mr-2" />
                Mute Notifications
              </Button>
              <Button variant="outline" class="w-full justify-start text-red-600 hover:text-red-700">
                <Icon name="lucide:trash-2" class="w-4 h-4 mr-2" />
                Delete Conversation
              </Button>
            </div>

            <!-- Shared Media -->
            <div>
              <h4 class="font-semibold text-sm text-gray-900 dark:text-white mb-3">Shared Media</h4>
              <div class="grid grid-cols-3 gap-2">
                <div class="aspect-square bg-gray-100 dark:bg-zinc-800 rounded-lg"></div>
                <div class="aspect-square bg-gray-100 dark:bg-zinc-800 rounded-lg"></div>
                <div class="aspect-square bg-gray-100 dark:bg-zinc-800 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </NuxtLayout>
</template>
