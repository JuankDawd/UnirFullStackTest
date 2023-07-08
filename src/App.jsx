import './App.scss'

import {
	IonApp,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonImg,
	IonInput,
	IonLabel,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	setupIonicReact,
} from '@ionic/react'
import { useEffect, useState } from 'react'

import useUserFetch from './Utils/hooks/useUserFetch'

setupIonicReact()
function App() {
	const { data } = useUserFetch()
	const [password, SetPassword] = useState('')
	useEffect(() => {
		SetPassword(data.password)
	}, [data])
	return (
		<IonApp>
			<IonPage>
				<div className="ion-page">
					<IonHeader>
						<IonToolbar color={'secondary'}>
							<IonTitle>{'User Profile View'}</IonTitle>
							<IonButtons slot="end">
								<IonButton disabled={true}></IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent class="ion-padding">
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>
									<IonLabel>User Information</IonLabel>
								</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<IonGrid>
									<IonRow>
										<IonCol className="left-align">Name</IonCol>
										<IonCol className="right-align">{data.name}</IonCol>
									</IonRow>
									<IonRow>
										<IonCol className="left-align">Registration Day</IonCol>
										<IonCol className="right-align">
											{data.RegistrationDay}
										</IonCol>
									</IonRow>
									<IonRow>
										<IonCol size="9">
											<IonInput
												fill="outline"
												type="text"
												value={password}
												onIonChange={(e) => SetPassword(e.target.value)}
												label={'Password'}
												labelPlacement="floating"
												required
											/>
										</IonCol>
										<IonCol size="3">
											<IonButton disabled={password === data.password}>
												Actualizar
											</IonButton>
										</IonCol>
									</IonRow>
								</IonGrid>
								<IonLabel></IonLabel>
							</IonCardContent>
						</IonCard>

						<IonCard>
							<IonCardHeader>
								<IonCardTitle>
									<IonLabel>{"Last 3 rent's"}</IonLabel>
								</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<IonGrid>
									<IonRow>
										{data.rents?.map((rent, key) => {
											return (
												<IonCol size="4" key={key}>
													<IonCard>
														<IonCardHeader>
															<IonImg className="img" src={rent.cover} />
															<IonCardTitle>{rent.title}</IonCardTitle>
															<IonCardSubtitle>{rent.author}</IonCardSubtitle>
														</IonCardHeader>
													</IonCard>
												</IonCol>
											)
										})}
									</IonRow>
								</IonGrid>
							</IonCardContent>
						</IonCard>
						<IonCard>
							<IonCardHeader>
								<IonCardTitle>
									<IonLabel>{'Favorites'}</IonLabel>
								</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								<IonGrid>
									<IonRow>
										{data.favorites?.map((rent, key) => {
											return (
												<IonCol size="4" key={key}>
													<IonCard>
														<IonCardHeader>
															<IonImg className="img" src={rent.cover} />
															<IonCardTitle>{rent.title}</IonCardTitle>
															<IonCardSubtitle>{rent.author}</IonCardSubtitle>
														</IonCardHeader>
													</IonCard>
												</IonCol>
											)
										})}
									</IonRow>
								</IonGrid>
							</IonCardContent>
						</IonCard>
					</IonContent>
				</div>
			</IonPage>
		</IonApp>
	)
}

export default App
