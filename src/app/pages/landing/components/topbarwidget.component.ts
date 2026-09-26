import { Component , computed, inject} from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '@/layout/service/layout.service';


@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    templateUrl: './topbarwidget.component.html'
})
export class TopbarWidget {

    router = inject(Router);
    private layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.layoutConfig().darkTheme);
    toggleDarkMode(): void {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
