import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//Import routing
import { AppRouting } from './app.routing';
import { FooterComponent } from './footer/footer.component';

//Import Shared Service
import { StorageService } from './shared/storage/storage.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        // Register the modules
        BrowserAnimationsModule,
        // Register routing
        AppRouting
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }