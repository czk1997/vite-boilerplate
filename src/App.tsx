import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { css } from '@emotion/react'

const queryClient = new QueryClient()

function App(): React.ReactElement {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div
                    css={css`
                        color: #535bf2;
                    `}
                >
                    Hello World!
                </div>
            </Provider>
        </QueryClientProvider>
    )
}

export default App
