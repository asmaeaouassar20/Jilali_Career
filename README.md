# Jilali Career Challenge

### Face the pressure. Think like a developer. Get ready for the real interview.

<hr/>
Plateforme de simulation d'entretiens techniques destinée aux développeurs web, avec des questions conçues pour tester leurs connaissances, leur logique et leur capacité à raisonner. Elle propose également des conseils de carrière inspirés d'expériences concrètes dans le domaine de la tech, afin d'aider les développeurs à mieux préparer leurs entretiens, faire leurs choix professionnels et construire progressivement leur carrière.
<hr/>
<p align="center">
<img width="450" height="450" alt="logo" src="https://github.com/user-attachments/assets/b35abe9e-258c-41e5-ab12-4793bad9d83e" />
</p>

## Menu
**Home**
→ Introduce the app and explain how it works

**Dashboard**
→ View your progress and statistics: correct/incorrect answers, performance, etc.

**Review**
→ Review questions and their answers to reinforce your knowledge

**Interview Practice**
→ Practice interview questions and select the correct answer(s)

**Success Stories**
→ Read testimonials and experiences from people who have already entered the professional world

**Career Advice**
→ Get practical advice for your professional development

**Career Guidance**
→ Explore career paths and get guidance based on your interests and goals

**Add Note**
→ Write down your thoughts, ideas, reminders, and personal notes to keep track of what matters to you.

**Log Out**

<br/><br/>
<hr/>

<br/><br/><br/><br/>
## Learn with algsotyle 🩶

### Communication entre deux composants
#### (1) On utilise @Input pour la communication entre "Parent" et "Enfant" : du PARENT vers ENFANT
- Le composant LayoutComponent contient sans doute le composant NavappjilaliComponent
- Le LayoutComponent connaît l'utilisateur connecté et veut donner son nom à la barre de navigation NavappjilaliComponent pour l'afficher
- Dans l'enfant (navappjilali.ts) :
```
export class Navappjilali {
  @Input() loggedUser! : IUser; 
}
```

<br/>

#### (2) De l'Enfant vers le Parent (@Output ou output())
- L'utilisateur clique sur le bouton "Déconnexion" situé dans ta barre de navigation NavappjilaliComponent.
- L'enfant (NavappjilaliComponent) capte le clic, mais c'est le parent (LayoutComponent ou LoginComponent) qui doit gérer la logique de déconnexion et la redirection.
- Dans l'enfant (navappjilali.ts) :
```
export class NavappjilaliComponent {
  // Déclare un événement personnalisé
  @Output() logout = new EventEmitter<void>();

  onLogoutClick() {
    // Émet l'événement vers le parent
    this.logout.emit();
  }
}
```
- Dans le parent (layout.html) :
```
<!-- Le parent écoute l'événement émis entre parenthèses () -->
<app-navappjilali (logout)="handleUserLogout()"></app-navappjilali>
```

<br/>

#### (3) Entre composants "Frères" ou Éloignés (Via un Service)
- On a une page AddNoteComponent et une page DashboardComponent
- Ce sont deux pages distinctes liées aux routes. Elles n'ont pas de relation Parent-Enfant directe.
- Quand on ajoute une note dans AddNoteComponent, le tableau de bord DashboardComponent doit se mettre à jour instantanément pour afficher la nouvelle note.
