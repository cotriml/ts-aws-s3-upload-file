import 'module-alias/register'
import env from '@/main/config/env'
import app from '@/main/config/app'

console.log('Connecting application...')
app.listen(env.port, () => {
  console.log(`Application listening to Port: ${env.port}`)
})
